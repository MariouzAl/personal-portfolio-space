// src/components/ErrorBoundary.tsx
import React, { type ErrorInfo, type ReactNode } from 'react';

// 1. Define las props que aceptará tu ErrorBoundary
interface ErrorBoundaryProps {
  children: ReactNode; // 'children' es de tipo ReactNode (cualquier cosa que React pueda renderizar)
}

// 2. Define el estado de tu ErrorBoundary
interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null; // 'error' puede ser un objeto Error o null
  errorInfo: ErrorInfo | null; // 'errorInfo' es de tipo ErrorInfo (del propio React) o null
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  // Este método estático recibe el error y actualiza el estado para indicar que hubo un error
  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error: error, errorInfo: null }; // Reiniciamos errorInfo aquí si lo quieres
  }

  // Este método se llama cuando se captura un error en cualquier componente hijo
  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // Aquí puedes registrar el error en un servicio de informes de errores externo (ej. Sentry)
    console.error("ErrorBoundary ha capturado un error:", error, errorInfo);
    this.setState({ errorInfo: errorInfo });
  }

  render(): ReactNode {
    if (this.state.hasError) {
      // Puedes renderizar cualquier UI de fallback personalizada
      return (
        <div style={{ padding: '20px', textAlign: 'center', color: 'red', border: '1px solid red' }}>
          <h1>¡Algo salió mal!</h1>
          <p>Lo sentimos, hubo un problema al cargar esta parte de la aplicación.</p>
            <details style={{ whiteSpace: 'pre-wrap', textAlign: 'left', marginTop: '10px' }}>
              {this.state.error && this.state.error.toString()}
              <br />
              {this.state.errorInfo && this.state.errorInfo.componentStack}
            </details>
          <button onClick={() => window.location.reload()} style={{ marginTop: '15px' }}>
            Recargar la página
          </button>
        </div>
      );
    }

    return this.props.children; // Si no hay error, renderiza los componentes hijos
  }
}

export default ErrorBoundary;