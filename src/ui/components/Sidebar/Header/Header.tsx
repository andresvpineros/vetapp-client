import styles from './Header.module.css'
import { FootPrint } from '@/ui/assets/svg'

const Header = () => {
	return (
		<div className={styles.header}>
			<FootPrint />
			<h1 className={styles.title}>Vetapp</h1>
		</div>
	);
};

export default Header;
