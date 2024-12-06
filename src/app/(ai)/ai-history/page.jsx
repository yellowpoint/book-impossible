"use client";

import { useRequest } from 'ahooks';
import { RefreshCcw, Search } from "lucide-react";
import Image from 'next/image';
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function AIHistoryPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const pageSize = 10;
  const [selectedRecord, setSelectedRecord] = useState(null);

  const {
    data,
    loading,
    refresh,
  } = useRequest(
    async () => {
      const res = await fetch(`/api/crud?model=aiHistory&action=read&page=${currentPage}&pageSize=${pageSize}&searchTerm=${searchTerm}`);
      return res.json();
    },
    {
      refreshDeps: [currentPage, searchTerm],
    }
  );

  const columns = [
    { accessorKey: "promptKey", header: "提示词关键字" },
    { accessorKey: "model", header: "模型" },
    {
      accessorKey: "createdAt",
      header: "创建时间",
      cell: ({ row }) => new Date(row.original.createdAt).toLocaleString(),
    },
    {
      id: "actions",
      header: "操作",
      cell: ({ row }) => (
        <Button
          variant="outline"
          onClick={() => setSelectedRecord(row.original)}
        >
          查看详情
        </Button>
      ),
    },
  ];

  const handleSearch = (value) => {
    setSearchTerm(value);
    setCurrentPage(1);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="mb-4 text-2xl font-bold">AI历史记录</h1>
      <div className="mb-4 flex space-x-2">
        <div className="relative flex w-[200px] items-center">
          <Search className="absolute left-2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="搜索..."
            className="pl-8"
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>
        <Button variant="outline" onClick={() => void refresh()}>
          <RefreshCcw className="mr-2 h-4 w-4" />
          刷新
        </Button>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              {columns.map((column) => (
                <TableHead key={column.accessorKey ?? column.id}>
                  {column.header}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {(data?.list ?? []).map((row) => (
              <TableRow key={row.id}>
                {columns.map((column) => (
                  <TableCell key={column.accessorKey ?? column.id}>
                    {column.cell
                      ? column.cell({ row: { original: row } })
                      : column.accessorKey
                        ? String(row[column.accessorKey])
                        : null}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <Dialog
        open={!!selectedRecord}
        onOpenChange={() => setSelectedRecord(null)}
      >
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>AI详细信息</DialogTitle>
          </DialogHeader>
          {selectedRecord && (
            <div className="space-y-4">
              <div>
                <h3 className="mb-2 font-semibold">提示词：</h3>
                <ScrollArea className="h-[100px] rounded-md border p-4">
                  {selectedRecord.prompt}
                </ScrollArea>
              </div>

              {selectedRecord.imageUrl && (
                <div>
                  <h3 className="mb-2 font-semibold">图片：</h3>
                  <Image
                    src={selectedRecord.imageUrl}
                    alt="Generated Image"
                    className="max-h-[300px] w-auto rounded-md"
                  />
                </div>
              )}

              <div>
                <h3 className="mb-2 font-semibold">结果：</h3>
                <ScrollArea className="h-[200px] rounded-md border p-4">
                  <pre className="whitespace-pre-wrap">
                    {selectedRecord.response}
                  </pre>
                </ScrollArea>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
