import './MyLabel.css'

interface Props {
  /**
   * Text to display
   */
  label: string,
  /**
   * Label size
   */
  size?: 'normal' | 'h1' | 'h2' | 'h3',
  /**
   * Capitalize all letterr
   */
  AllCaps?: boolean,
  /**
   * Label color
   */
  color?: 'text-primary' | 'text-secondary' | 'text-tertiary',
  /**
   * Font color
   */
  fontColor?: string
}
const MyLabel = ({label, size= 'h1', AllCaps= false, color= 'text-tertiary', fontColor='#1ddd54'}: Props) => {
        return (
    <span className={`${size} ${color}`}
          style={{color:fontColor}}
    >
      {  AllCaps ? label.toUpperCase() : label}
    </span>
  );
}

export default MyLabel;
