import React from 'react';
import {FlatList, Text, View} from 'react-native';
import styled from 'styled-components';
import {useQueryClient, MutationFunction} from '@tanstack/react-query';
import {updateOne, removeOne} from '../../lib/Firebase';
import TodoRow from '../atoms/TodoRow';
import {Todo} from '../../store/atoms/todo';
import useQueries from '../../hooks/useQueries';
import todos from '../../../fixtures/todos';

const TodoList: React.FC<Props> = props => {
  const queryClient = useQueryClient();
  const {useMutaionTodo} = useQueries();
  const updateMutation = useMutaionTodo(
    queryClient,
    updateOne as MutationFunction,
  );
  const removeMutation = useMutaionTodo(
    queryClient,
    removeOne as MutationFunction,
  );

  const onClickItem = (todo: Todo) => {
    updateMutation.mutate({
      collection: 'todos',
      docId: todo.id,
      data: {...todo, isChecked: true},
    });
  };
  const onClickDeleteBtn = (todoId: string) => {
    removeMutation.mutate({
      collection: 'todos',
      docId: todoId,
    });
  };
  return (
    <Container>
      {todos.length ? (
        <FlatList
          data={todos}
          accessible={true}
          accessibilityRole={'list'}
          keyExtractor={todo => todo.id}
          renderItem={({item}: {item: Todo}) => (
            <TodoRow
              datas={item}
              onPressCheck={() => onClickItem(item)}
              onPressDelete={() => onClickDeleteBtn(item.id)}
            />
          )}
        />
      ) : (
        <Text>Todo가 없습니다.</Text>
      )}
    </Container>
  );
};
export default TodoList;

type Props = {
  todos: Todo[];
};

const Container = styled(View)`
  width: 100%;
  height: 100%;
  background-color: #fff;
`;
