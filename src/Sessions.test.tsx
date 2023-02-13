import React from 'react';
import { render, screen } from '@testing-library/react';
import Sessions from './Sessions';

test("renders sessions header", () => {
    render(<Sessions />);

    const sessionTitle = screen.getByText(/session header/i);
    expect(sessionTitle).toBeInTheDocument();
})