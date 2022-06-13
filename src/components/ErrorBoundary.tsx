import React, { Component, ErrorInfo, ReactNode } from "react";
import { connect } from "react-redux";

interface Props {
  children?: ReactNode;
  error: string;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(_: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public componentDidUpdate(prevProps: any, prevState: any) {
    if (prevProps.error !== this.props.error) {
      this.setState({ hasError: true });
    }
  }

  public render() {
    const { error } = this.props;
    if (this.state.hasError || (error && error.length > 0)) {
      return (
        <div className="row">
          <div className="col s12">
            <div className="card red">
              <div className="card-content white-text">
                <span className="card-title flow-text">
                  Sorry.. there was an error
                </span>
                <p>{error}</p>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

const mapStateToProps = (state: any) => {
  return { error: state.shop.error };
};

export default connect(mapStateToProps)(ErrorBoundary);
