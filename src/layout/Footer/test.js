import { screen } from '@testing-library/react';
import Footer from '.';

describe('Footer', () => {
    test('it shows Contact me here ', () => {
        render(<Footer />);
        const content = screen.queryByText(/Contact me here/i);
        expect(content).toBeInTheDocument();
    })
})