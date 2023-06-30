import { render, screen } from '@testing-library/react';
import Home from '../app/page';

describe('Example test', () => {
  it('should be true', () => {
    expect(true).toBe(true);
  });

  test('should render a mock component', () => {
    render(<h1>Should Render</h1>);

    const heading = screen.getByRole('heading', { name: /should render/i });

    expect(heading).toBeInTheDocument();
  });

  test('should render a route from nextjs', () => {
    render(<Home />);

    const button = screen.getByRole('button', { name: /Boop/i });

    expect(button).toBeInTheDocument();
  });
});
