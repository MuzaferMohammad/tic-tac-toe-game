import React from 'react';
import { render, screen } from '@testing-library/react';
import Board from './board';

test('render board',()=>{
    const handelSquare=jest.fn;
    render(<Board />)
})