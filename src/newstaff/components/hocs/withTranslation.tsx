import { ComponentType } from "react";
import { useTranslation } from "react-i18next";

const withTranslation = <P extends object>(Component: ComponentType<P>) => (props: any) => {
  const { t } = useTranslation();
  return <Component t={t} {...props} />;
};

export default withTranslation;
