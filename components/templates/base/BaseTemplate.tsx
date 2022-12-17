import { ReactFC } from '@types';
import styles from './BaseTemplate.module.css';

interface BaseTemplateProps {
  sampleTextProp: string;
}

const BaseTemplate: ReactFC<BaseTemplateProps> = ({ sampleTextProp }) => {
  return <div className={styles.container}>{sampleTextProp}</div>;
};

export default BaseTemplate;
