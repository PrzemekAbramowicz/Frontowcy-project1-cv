import { Header } from '../Header';
import { Personal } from '../Personal';
import { Details } from '../Details';

import './CV.scss';
import { CVData } from '../type';

const CV = () => {
	const cvData: CVData = {
		personal: {
			photo: '/public/assets/portrait.webp',
			name: 'Przemysław',
			lastName: 'Abramowicz',
			position: 'Frontend Developer',
		},
		details: {
			experience: [
				{ year: 2020, description: 'Lorem ipsum' },
				{ year: 2021, description: 'Lorem ipsum dolor sit amet' },
			],
			education: ['Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Tekst do przeczytania'],
		},
	};

	return (
		<main className='cv-main'>
			<Header data={cvData.personal} />
			<Personal data={cvData.personal} />
			<Details data={cvData.details} />
		</main>
	);
};

export { CV };
