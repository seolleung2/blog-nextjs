'use client';

import React, { KeyboardEventHandler, useState } from 'react';
import _ from 'lodash';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { addMessage, getMessages } from '@service/lib/messages';
import LoadingSpinner from '@components/LoadingSpinner';

export default function Guestbook() {
  const [input, setInput] = useState<string>('');

  const queryClient = useQueryClient();

  const { data, isFetching } = useQuery(['messages'], getMessages);

  const addMessageMutation = useMutation(addMessage, {
    onSuccess: () => {
      setInput('');
      queryClient.invalidateQueries(['messages']);
    },
  });

  const handleKeydown = _.debounce(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Enter') {
        addMessageMutation.mutate(input);
      }
    },
    400
  );

  const handleSubmit = _.debounce(() => {
    addMessageMutation.mutate(input);
  }, 400);

  return (
    <div className="flex h-[calc((100vh-14rem))] w-full flex-col space-y-4 rounded-lg bg-white px-6 py-4 shadow-lg dark:text-black md:p-8">
      <div className="flex flex-col space-y-4">
        <h2 className="text-center text-3xl font-bold md:text-4xl">
          Guestbook
        </h2>
        <div className="flex flex-col text-sm md:text-base">
          <p className="text-center">도토리정의 방명록 페이지 입니다.</p>
          <p className="text-center">
            자유로운 메시지를 남겨주세요. 악플은 NoNo!
          </p>
        </div>
        <div className="flex h-12 rounded-md border border-gray-300">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeydown}
            className="h-full w-full rounded-l-md p-2 text-xs focus:outline-none dark:bg-white md:text-sm"
          />
          <button
            onClick={handleSubmit}
            className="w-24 rounded-r-md bg-blue-500 px-4 py-2 text-xs text-white hover:bg-blue-600 md:text-sm"
          >
            제출하기
          </button>
        </div>
      </div>
      <ul className="space-y-4 overflow-y-auto text-sm md:text-base">
        {!isFetching ? (
          (data.messages || []).map(
            (message: {
              createdAt: Date;
              updatedAt: Date;
              id: number;
              text: string;
            }) => {
              const date = new Date(message.createdAt).toLocaleDateString(
                'ko-KR',
                {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                  weekday: 'long',
                }
              );

              const time = new Date(message.createdAt).toLocaleTimeString(
                'ko-KR',
                {
                  hour: 'numeric',
                  minute: 'numeric',
                  second: 'numeric',
                }
              );

              return (
                <li
                  key={message.id}
                  className="flex w-full flex-col items-start"
                >
                  <p className="">{message.text}</p>
                  <span className="text-xs text-gray-700">
                    {date} {time} 🚨
                  </span>
                </li>
              );
            }
          )
        ) : (
          <LoadingSpinner />
        )}
      </ul>
    </div>
  );
}
