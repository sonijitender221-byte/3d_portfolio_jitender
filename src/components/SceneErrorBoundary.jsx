import { Component } from "react";

// Prevent a failed WebGL context or 3D asset from leaving the entire route blank.
class SceneErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error) {
    console.error("3D scene failed to render:", error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div role="status" className="absolute inset-0 flex items-center justify-center bg-slate-100 px-6 text-center text-slate-800">
          <div className="max-w-lg rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold">3D scene unavailable</h2>
            <p className="mt-2">The interactive scene could not load on this device. You can still use the navigation to view my projects and contact details.</p>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default SceneErrorBoundary;
