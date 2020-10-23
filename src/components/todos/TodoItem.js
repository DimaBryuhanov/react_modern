import React from 'react';
import styled from 'styled-components';

//CSS Styled Components:
const TodoItemContainer = styled.div`
    background: #fff;
    border-radius: 8px;
    margin-top: 8px;
    padding: 16px;
    position: relative;
    box-shadow: 0 4px 8px grey;
`;

const ButtonsContainer = styled.div`
    position: absolute;
    right: 12px;
    bottom: 12px;
`;

const CompletedButton = styled.button`
    display: inline-block;
    background-color: #22ee22;
`;

const RemoveButton = styled.button`
    display: inline-block;
    background-color: #ee2222;
    margin-left: 8px;
`;

const TodoItem = ({ todo, onRemovePressed, onCompletedPressed }) => {
    return (
        <TodoItemContainer>
            <h3>{todo.text}</h3>
            <ButtonsContainer>
                {todo.isCompleted
                    ? null
                    : <CompletedButton
                        onClick={() => onCompletedPressed(todo.id)}
                    >
                        Completed
                    </CompletedButton>
                }
                <RemoveButton
                onClick={() => onRemovePressed(todo.id)}
                >
                Remove
                </RemoveButton>
            </ButtonsContainer>
        </TodoItemContainer>
    );
};

export default TodoItem;