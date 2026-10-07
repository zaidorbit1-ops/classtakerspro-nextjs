import { render, screen, fireEvent, act, waitFor } from '@testing-library/react';
import { shouldShowPopup } from './popupConfig';
import PopupForm from './component/PopupForm';

describe('PopupForm', () => {
  beforeEach(() => {
    jest.useFakeTimers();
    global.fetch = jest.fn(() => Promise.resolve({
      ok: true,
      json: async () => ({ success: true, message: 'Lead submitted successfully.' }),
    }));
  });

  afterEach(() => {
    act(() => {
      jest.runOnlyPendingTimers();
    });
    jest.useRealTimers();
  });

  test('shows a thanks message after a successful lead submission', async () => {
    render(<PopupForm onClose={jest.fn()} />);

    fireEvent.change(screen.getByPlaceholderText(/full name/i), {
      target: { value: 'Ali Hassan' },
    });
    fireEvent.change(screen.getByPlaceholderText(/email address/i), {
      target: { value: 'ali@example.com' },
    });
    fireEvent.change(screen.getByPlaceholderText(/phone number/i), {
      target: { value: '03001234567' },
    });
    fireEvent.change(screen.getByPlaceholderText(/message/i), {
      target: { value: 'I want to know more about the course.' },
    });

    fireEvent.click(screen.getByRole('button', { name: /submit/i }));

    expect(screen.getByText(/sending/i)).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText(/thanks, ali hassan!/i)).toBeInTheDocument();
      expect(screen.getByText(/your enquiry has been received/i)).toBeInTheDocument();
    });
  });

  test('blocks the popup on contact and legal pages', () => {
    expect(shouldShowPopup('/contact')).toBe(false);
    expect(shouldShowPopup('/privacy-policy')).toBe(false);
    expect(shouldShowPopup('/terms-and-condition')).toBe(false);
    expect(shouldShowPopup('/')).toBe(true);
  });
});
