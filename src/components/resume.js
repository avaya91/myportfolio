import React, { Component } from "react";
import { Document, Page } from "react-pdf";

class Resume extends Component {
  state = { numPages: null, pageNumber: 1 };

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  };

  goToPrevPage = () =>
    this.setState(state => ({ pageNumber: state.pageNumber - 1 }));
  goToNextPage = () =>
    this.setState(state => ({ pageNumber: state.pageNumber + 1 }));

  render() {
    const { pageNumber, numPages } = this.state;

    return (
    <div className="pdf-view"
    style={{
      position: 'absolute', left: '50%', top: '90%',
      transform: 'translate(-50%, -50%)'
    }}>
        <div className="pdf-view">
          <Document
            file="/myPDF.pdf"
            onLoadSuccess={this.onDocumentLoadSuccess}
          >
            <Page pageNumber={1} width={900} />
          </Document>
        </div>

        <p>
          Page {pageNumber} of {numPages}
        </p>
      </div>
    );
  }
}

export default Resume;

