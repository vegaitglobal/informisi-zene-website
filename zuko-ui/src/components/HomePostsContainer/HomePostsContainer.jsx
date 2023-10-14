import styles from './HomePostsContainer.module.scss';
import HomePost from '../HomePost/HomePost';
import HomePostV2 from '../HomePostV2/HomePostV2';

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
		readMoreUri: '#',
	},
	{
		id: 1,
		title: 'Naslov 2',
		user: 'Marina',
		crated: '2023-10-13T18:00',
		description:
			'Bits of moving fluff white dwarf kindling the energy hidden in matter shores of the cosmic ocean Jean-François Champollion consciousness.',
		coverImageUri: './placeholder.png',
		category: 'KOLIKI JE MOJ DEO?',
		readMoreUri: '#',
	},
	{
		id: 2,
		title: 'Naslov 3',
		user: 'Marina',
		crated: '2023-10-13T18:00',
		description:
			'Bits of moving fluff white dwarf kindling the energy hidden in matter shores of the cosmic ocean Jean-François Champollion consciousness.',
		coverImageUri: './placeholder.png',
		category: 'KOLIKI JE MOJ DEO?',
		readMoreUri: '#',
	},
	{
		id: 3,
		title: 'Naslov 3',
		user: 'Marina',
		crated: '2023-10-13T18:00',
		description:
			'Bits of moving fluff white dwarf kindling the energy hidden in matter shores of the cosmic ocean Jean-François Champollion consciousness.',
		coverImageUri: './placeholder.png',
		category: 'KOLIKI JE MOJ DEO?',
		readMoreUri: '#',
	},
	{
		id: 4,
		title: 'Naslov 3',
		user: 'Marina',
		crated: '2023-10-13T18:00',
		description:
			'Bits of moving fluff white dwarf kindling the energy hidden in matter shores of the cosmic ocean Jean-François Champollion consciousness.',
		coverImageUri: './placeholder.png',
		category: 'KOLIKI JE MOJ DEO?',
		readMoreUri: '#',
	},
	{
		id: 5,
		title: 'Naslov 3',
		user: 'Marina',
		crated: '2023-10-13T18:00',
		description:
			'Bits of moving fluff white dwarf kindling the energy hidden in matter shores of the cosmic ocean Jean-François Champollion consciousness.',
		coverImageUri: './placeholder.png',
		category: 'KOLIKI JE MOJ DEO?',
		readMoreUri: '#',
	},
];

export default function HomePostsContainer({
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
							return <HomePostV2 key={post.id} postData={post} />;
					  })
					: data.slice(0, 2).map((post) => {
							return (
								<>
									<HomePost key={post.id} postData={post} />
								</>
							);
					  })}
			</div>
		</div>
	);
}
