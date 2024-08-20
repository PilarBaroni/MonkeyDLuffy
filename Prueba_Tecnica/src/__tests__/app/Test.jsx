import RootLayout from "@/app/layout";
import Home from "@/app/page";
import { render, screen } from "@testing-library/react";

describe("Home Page", () => {
  it("renders Cabecera component", () => {
    render(<Home />);
    expect(
      screen.getByText("Capitán y fundador de los Piratas de Sombrero de Paja")
    ).toBeInTheDocument();
  });
});

describe("Home Page", () => {
  it("renders SobreMi component", () => {
    render(<Home />);
    expect(screen.getByText("Conocer más")).toBeInTheDocument();
  });
});
describe("Home Page", () => {
  it("renders MisIntereses component", () => {
    render(<Home />);
    expect(screen.getByText("Mis Intereses")).toBeInTheDocument();
    expect(screen.getByText("Comer")).toBeInTheDocument();
    expect(screen.getByText("Hermanos")).toBeInTheDocument();
    expect(screen.getByText("Pelear")).toBeInTheDocument();
    expect(screen.getByText("Encontrar el One Piece")).toBeInTheDocument();
    expect(screen.getByText("Ser Rey Pirata")).toBeInTheDocument();
  });
});

describe("Home Page", () => {
  it("renders Contacto component", () => {
    render(<Home />);
    expect(
      screen.getByText("Envíame un mensaje para ser nakamas")
    ).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Nombre")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Email")).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Escribe tu mensaje aquí")
    ).toBeInTheDocument();
    expect(screen.getByText("Contactar")).toBeInTheDocument();
  });
});