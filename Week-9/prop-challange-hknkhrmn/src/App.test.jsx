import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom';

test('Ahmet verileri props olarak doğru iletilmiş mi?', () => {
  render(<App />);

  expect(screen.getByText(/Ad: Ahmet/i)).toBeInTheDocument();
  expect(screen.getByText(/Yaş: 25/i)).toBeInTheDocument();
});

test('Ahmet Buttonu var mı?', () => {
  render(<App />);
  const ahmetButton = screen.getByRole('button', { name: /Ahmet/i });
  fireEvent.click(ahmetButton);

  expect(screen.getByText(/Ad: Ahmet/i)).toBeInTheDocument();
  expect(screen.getByText(/Yaş: 25/i)).toBeInTheDocument();
});

test('Mehmet Bilgileri Geliyor mu?', () => {
  render(<App />);
  const mehmetButton = screen.getByRole('button', { name: /Mehmet/i });
  fireEvent.click(mehmetButton);

  expect(screen.getByText(/Ad: Mehmet/i)).toBeInTheDocument();
  expect(screen.getByText(/Yaş: 30/i)).toBeInTheDocument();
});

test('Cemil Bilgileri Geliyor mu?', () => {
  render(<App />);
  const cemilButton = screen.getByRole('button', { name: /Cemil/i });
  fireEvent.click(cemilButton);

  expect(screen.getByText(/Ad: Cemil/i)).toBeInTheDocument();
  expect(screen.getByText(/Yaş: 20/i)).toBeInTheDocument();
});

test('Ada Bilgileri Geliyor mu?', () => {
  render(<App />);
  const adaButton = screen.getByRole('button', { name: /Ada/i });
  fireEvent.click(adaButton);

  expect(screen.getByText(/Ad: Ada/i)).toBeInTheDocument();
  expect(screen.getByText(/Yaş: Bilinmiyor/i)).toBeInTheDocument();
});

test('Button value değeri doğru mu?', () => {
  render(<App />);
  const mehmetButton = screen.getByText(/Mehmet/i);
  expect(mehmetButton.id).toBe("1");
});



