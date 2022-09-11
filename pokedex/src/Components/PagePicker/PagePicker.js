import React from "react";
import { PagePicker } from "./PagePickerStyle";

export function PagePickers(props) {
  function topFunction() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  switch (props.pageNumber) {
    case 1:
      return (
        <PagePicker>
          <button
            onClick={(e) => {
              topFunction();
              props.setPage(props.pageNumber + 1);
            }}
          >
            <span>Próxima Página</span>
          </button>
          <button
            onClick={(e) => {
              topFunction();
              props.setPage(31);
            }}
          >
            <span>Última Página</span>
          </button>
        </PagePicker>
      );
      break;
    case 31:
      return (
        <PagePicker>
          <button
            onClick={(e) => {
              topFunction();
              props.setPage(1);
            }}
          >
            <span>Primeira Página</span>
          </button>
          <button
            onClick={(e) => {
              topFunction();
              props.setPage(props.pageNumber - 1);
            }}
          >
            <span>Página Anterior</span>
          </button>
        </PagePicker>
      );
      break;
  }

  return (
    <PagePicker>
      <button
        onClick={(e) => {
          topFunction();
          props.setPage(1);
        }}
      >
        <span>Primeira Página</span>
      </button>
      <button
        onClick={(e) => {
          topFunction();
          props.setPage(props.pageNumber - 1);
        }}
      >
        <span>Página Anterior</span>
      </button>
      <button
        onClick={(e) => {
          topFunction();
          props.setPage(props.pageNumber + 1);
        }}
      >
        <span>Próxima Página</span>
      </button>
      <button
        onClick={(e) => {
          topFunction();
          props.setPage(31);
        }}
      >
        <span>Última Página</span>
      </button>
    </PagePicker>
  );
}
