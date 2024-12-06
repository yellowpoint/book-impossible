"use client";

import { useRequest } from "ahooks";
import { Plus, RefreshCcw, Search } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Textarea } from "@/components/ui/textarea";
import { AVAILABLE_MODELS, DEFAULT_MODEL } from "@/app/(ai)/providers";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function AIPromptPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isCreateDrawerOpen, setIsCreateDrawerOpen] = useState(false);

  const form = useForm({
    defaultValues: {
      name: "",
      promptContent: "",
      promptType: "dynamic",
      llm: DEFAULT_MODEL,
    },
  });

  const { data: promptData, loading, refresh } = useRequest(
    () =>
      fetch(`/api/crud?model=prompt&action=read&searchTerm=${searchTerm}`).then(
        (res) => res.json()
      ),
    {
      refreshDeps: [searchTerm],
    }
  );

  const { run: createPrompt, loading: creating } = useRequest(
    (data) =>
      fetch("/api/crud", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "prompt",
          action: "create",
          data,
        }),
      }).then((res) => res.json()),
    {
      manual: true,
      onSuccess: (result) => {
        if (result.code === 0) {
          toast.success("创建成功");
          setIsCreateDrawerOpen(false);
          form.reset();
          refresh();
        } else {
          toast.error(result.message || "创建失败");
        }
      },
      onError: (error) => {
        toast.error("创建失败");
        console.error(error);
      },
    }
  );

  const handleSubmit = (values) => {
    createPrompt(values);
  };

  const columns = [
    { accessorKey: "name", header: "名称" },
    { accessorKey: "promptType", header: "类型" },
    { accessorKey: "llm", header: "模型" },
    {
      accessorKey: "createdAt",
      header: "创建时间",
      cell: ({ row }) => new Date(row.original.createdAt).toLocaleString(),
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="mb-4 text-2xl font-bold">AI Prompt管理</h1>

      <div className="mb-4 flex space-x-2">
        <div className="relative flex w-[200px] items-center">
          <Search className="absolute left-2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="搜索..."
            className="pl-8"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Button variant="outline" onClick={() => void refresh()}>
          <RefreshCcw className="mr-2 h-4 w-4" />
          刷新
        </Button>
        <Button onClick={() => setIsCreateDrawerOpen(true)}>
          <Plus className="mr-2 h-4 w-4" />
          新建
        </Button>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              {columns.map((column) => (
                <TableHead key={column.accessorKey}>{column.header}</TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {(promptData?.data?.list ?? []).map((row) => (
              <TableRow key={row.id}>
                {columns.map((column) => (
                  <TableCell key={column.accessorKey}>
                    {column.cell
                      ? column.cell({ row: { original: row } })
                      : row[column.accessorKey]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <Sheet open={isCreateDrawerOpen} onOpenChange={setIsCreateDrawerOpen}>
        <SheetContent className="w-[400px] sm:w-[540px]">
          <SheetHeader>
            <SheetTitle>新建 Prompt</SheetTitle>
          </SheetHeader>
          <div className="mt-4">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(handleSubmit)}
                className="space-y-4"
              >
                <FormField
                  control={form.control}
                  name="name"
                  rules={{ required: "请输入名称" }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>名称</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="输入Prompt名称" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="promptContent"
                  rules={{ required: "请输入Prompt内容" }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Prompt内容</FormLabel>
                      <FormControl>
                        <Textarea
                          {...field}
                          placeholder="输入Prompt内容"
                          className="min-h-[200px]"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="promptType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>类型</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="选择类型" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="static">静态</SelectItem>
                          <SelectItem value="dynamic">动态</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="llm"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>模型</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="选择模型" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {AVAILABLE_MODELS.map((model) => (
                            <SelectItem key={model.value} value={model.value}>
                              {model.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full" disabled={creating}>
                  {creating ? "创建中..." : "创建"}
                </Button>
              </form>
            </Form>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
} 