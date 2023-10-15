import styles from './PostsContainer.module.scss';
import Post from '../Post/Post';
import PostV2 from '../PostV2/PostV2';

const initialValue = [
	{
		id: 0,
		title: 'Ruralne Evropljanke',
		user: 'Marina',
		crated: '2023-10-13T18:00',
		description:
			'Bits of moving fluff white dwarf kindling the energy hidden in matter shores of the cosmic ocean Jean-François Champollion consciousness.',
		coverImageUri: './placeholder.png',
		category: 'KOLIKI JE MOJ DEO?'
	},
	{
		id: 1,
		title: 'Naslov 2',
		user: 'Marina',
		crated: '2023-10-13T18:00',
		description:
			'Bits of moving fluff white dwarf kindling the energy hidden in matter shores of the cosmic ocean Jean-François Champollion consciousness.',
		coverImageUri: './placeholder.png',
		category: 'KOLIKI JE MOJ DEO?'
	},
	{
		id: 2,
		title: 'Naslov 3',
		user: 'Marina',
		crated: '2023-10-13T18:00',
		description:
			'Bits of moving fluff white dwarf kindling the energy hidden in matter shores of the cosmic ocean Jean-François Champollion consciousness.',
		coverImageUri: './placeholder.png',
		category: 'KOLIKI JE MOJ DEO?'
	},
	{
		id: 3,
		title: 'Naslov 3',
		user: 'Marina',
		crated: '2023-10-13T18:00',
		description:
			'Bits of moving fluff white dwarf kindling the energy hidden in matter shores of the cosmic ocean Jean-François Champollion consciousness.',
		coverImageUri: './placeholder.png',
		category: 'KOLIKI JE MOJ DEO?'
	},
	{
		id: 4,
		title: 'Naslov 3',
		user: 'Marina',
		crated: '2023-10-13T18:00',
		description:
			'Bits of moving fluff white dwarf kindling the energy hidden in matter shores of the cosmic ocean Jean-François Champollion consciousness.',
		coverImageUri: './placeholder.png',
		category: 'KOLIKI JE MOJ DEO?'
	},
	{
		id: 5,
		title: 'Naslov 3',
		user: 'Marina',
		crated: '2023-10-13T18:00',
		description:
			'Bits of moving fluff white dwarf kindling the energy hidden in matter shores of the cosmic ocean Jean-François Champollion consciousness.',
		coverImageUri: './placeholder.png',
		category: 'KOLIKI JE MOJ DEO?'
	},
];

export default function PostsContainer({
	data = initialValue,
	displayVersion = 'v1',
}) {
	return (
		<div className={styles.container}>
			{displayVersion === 'v1' && (
				<h3 className={styles.container__heading}>Prilike za žene</h3>
			)}
			<div className={styles.container__posts}>
				{displayVersion === 'v2'
					? data.map((post) => {
							return <PostV2 key={post.id} postData={post} />;
					  })
					: data.slice(0, 2).map((post) => {
							return (
								<>
									<Post key={post.id} postData={post} />
								</>
							);
					  })}
			</div>
		</div>
	);
}
