import styles from './PostsContainer.module.scss';
import Post from '../Post/Post';

const initialValue = [
	{
		id: 0,
		title: 'Ruralne Evropljanke',
		user: 'Marina',
		crated: '2023-10-13T18:00',
		description:
			'Bits of moving fluff white dwarf kindling the energy hidden in matter shores of the cosmic ocean Jean-François Champollion consciousness.',
		coverImageUri: './placeholder.png',
		category: 'KOLIKI JE MOJ DEO?',
	},
	{
		id: 1,
		title: 'Ruralne Evropljanke',
		user: 'Marina',
		crated: '2023-10-13T18:00',
		description:
			'Bits of moving fluff white dwarf kindling the energy hidden in matter shores of the cosmic ocean Jean-François Champollion consciousness.',
		coverImageUri: './placeholder.png',
		category: 'KOLIKI JE MOJ DEO?',
	},
];

export default function PostsContainer({ data = initialValue}) {
	return (
		<div className={styles.container}>
			<h3 className={styles.container__heading}>Prilike za žene</h3>
			<div className={styles.container__posts}>
				{data.map((post) => (<Post key={post.id} postData={post}/>))}
			</div>
		</div>
	);
}