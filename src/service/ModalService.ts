import {ReactElement} from 'react';

const defaultModalState: IModalState = {
  open: false,
  type: "",
};

interface IModalState {
  open: boolean;
  type: "PROMPT" | "ERROR" | "MESSAGE" | "";
  title?: string;
  message?: string | ReactElement;
  completeLabel?: string;
  cancelLabel?: string;
  onCancel?: Function;
  onComplete?: Function;
}

/**
 * The class is used to handle and display specific modals
 */
export default class ModalService {
  setState: Function = () => {
    throw new Error(
      "ModalService: you must init modal service and pass a SetState as a function!"
    );
  };

  /**
   * Must be called before any use of the modal service to get it worked
   */
  init = (setState: Function) => {
    this.setState = setState;
  };

  /**
   * Show error message in the modal dialog. If there is a translation for the message
   * it will be shown translated.
   *
   * @param message Error message
   * This message can be translated with "errors": {} object
   */
  showError = (message: string) => {
    this.setState({
      open: true,
      message: message,
      type: "ERROR",
    });
  };

  /**
   * Show error message in the modal dialog. If there is a translation for the message
   * it will be shown translated.
   *
   * @param message Error message
   * This message can be translated with "errors": {} object
   */
  showPrompt = (
    title: string | ReactElement,
    message: string | ReactElement,
    completeLabel: string | ReactElement,
    cancelLabel: string | ReactElement,
    onComplete?: Function,
    onCancel?: Function
  ) => {
    this.setState({
      open: true,
      type: "PROMPT",
      title,
      message,
      completeLabel,
      cancelLabel,
      onComplete,
      onCancel,
    });
  };

  /**
   * Show error message in the modal dialog. If there is a translation for the message
   * it will be shown translated.
   *
   * @param message Error message
   * This message can be translated with "errors": {} object
   */
  showMessage = (title: string, message: string | ReactElement) => {
    this.setState({
      open: true,
      type: "MESSAGE",
      title,
      message,
    });
  };
}

export { defaultModalState };
export type { IModalState };
