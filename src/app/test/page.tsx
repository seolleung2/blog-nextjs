'use client';

import React, { useMemo } from 'react';
import { ColumnDef } from '@tanstack/react-table';
import { Table } from '@components/tanstack';
import { filterFns } from '@utils/filterFns';

type Item = {
  name: string;
  price: number;
  quantity: number;
};

export interface TableItem extends Item {
  id: number;
}

export default function TestPage() {
  const dummyData = () => {
    const items = [];
    for (let i = 0; i < 30; i++) {
      items.push({
        id: i,
        name: `Item ${i}`,
        price: 100,
        quantity: 1,
      });
    }

    return items;
  };

  const cols = useMemo<ColumnDef<TableItem>[]>(
    () => [
      {
        header: 'Name',
        cell: (row) => row.renderValue(),
        accessorKey: 'name',
        footer: 'Total',
      },
      {
        header: 'Price',
        cell: (row) => row.renderValue(),
        accessorKey: 'price',
        footer: () => '1000',
      },
      {
        header: 'Quantity',
        cell: (row) => row.renderValue(),
        accessorKey: 'quantity',
      },
    ],
    []
  );

  return (
    <div className="m-auto px-10 py-5">
      <Table
        data={dummyData()}
        columns={cols}
        showFooter
        showPagination
        showGlobalFilter
        filterFn={filterFns.contains}
      />
    </div>
  );
}
