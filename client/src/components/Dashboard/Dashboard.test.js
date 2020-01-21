import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom'
import DashBoard from './Dashboard';
import ActionBtn from './ActionBtn';


it('Dashboard component renders', ()=>{
    const {getByText} = render(<DashBoard />);
    expect(getByText(/dashboard/i)).toHaveTextContent(/Dashboard/);
});

it('ActionBtn component renders', () => {
    const {getByTestId} = render(<ActionBtn/>);

    expect(getByTestId('actionBtn')).toHaveClass('action-btn');
});
