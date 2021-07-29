import React from 'react';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { RiPagesLine } from 'react-icons/ri';
import AboutUsStyled from './styles';

function About() {
	let aboutUs = [
		{
			fullName: 'Celeny Andrea',
			image:
				'https://i.postimg.cc/cHW9G6v7/celeny.jpg',
			linkedin: 'https://www.linkedin.com/in/',
			github: 'https://github.com/',
			cv: 'https://res.cloudinary.com/',
		},
		{
			fullName: 'Gianfranco Pavetto',
			image:
				'https://i.postimg.cc/QCHzxC3F/gian.jpg',
			linkedin: 'https://www.linkedin.com/in/',
			github: 'https://github.com/',
			cv: 'https://res.cloudinary.com/',
		},
		{
			fullName: 'Juan Cruz Roberts',
			image:
				'https://i.postimg.cc/zGFYQLXN/rogers.jpg',
			linkedin: 'https://www.linkedin.com/in/',
			github: 'https://github.com/',
			cv: 'https://res.cloudinary.com/',
		},
		{
			fullName: 'Juan M. Cereceda',
			image:
				'https://i.postimg.cc/dQhv0tnR/juan-m-ce.jpg',
			linkedin: 'https://www.linkedin.com/in/',
			github: 'https://github.com/',
			cv: 'https://res.cloudinary.com/',
		},
		{
			fullName: 'Mauro Haidr',
			image:
				'https://i.postimg.cc/0N5118bw/mauro.jpg',
			linkedin: 'https://www.linkedin.com/in/',
			github: 'https://github.com/',
			cv: 'https://res.cloudinary.com/',
		},
		{
			fullName: 'Rafael E. Mossetto',
			image:
				'https://i.postimg.cc/vBcRD378/rafa.jpg',
			linkedin: 'https://www.linkedin.com/in/rafamossetto',
			github: 'https://github.com/rafamossetto',
			cv: 'https://drive.google.com/file/',
		},
		{
			fullName: 'Ruth M. Codina',
			image:
				'https://i.postimg.cc/RWSHXr0t/ruth.jpg',
			linkedin: 'https://www.linkedin.com/in/',
			github: 'https://github.com/',
			cv: 'https://res.cloudinary.com/',
		},
		{
			fullName: 'Wilmar Zapata',
			image:
				'https://i.postimg.cc/c4DQBhfG/wilmar.jpg',
			linkedin: 'https://www.linkedin.com/in/',
			github: 'https://github.com/',
			cv: 'https://res.cloudinary.com/',
		},
	];

	return (
		<AboutUsStyled>
			{aboutUs.map((el, i) => (
				<div className='card' key={i + el + 'div'}>
					<div className='imageDiv' key={i + el + 'div2'}>
						<img
							className='image'
							src={el.image}
							alt='profile pic'
							key={i + el + 'img'}
						/>
					</div>
					<div className='nameDiv' key={i + el + 'div3'}>
						{el.fullName}
					</div>
					<div className='iconsDiv' key={i + el + 'div4'}>
						{el.linkedin ? (
							<a
								target='_blank'
								href={el.linkedin}
								rel='noopener noreferrer'
								key={i + el + 'a'}
							>
								<AiFillLinkedin className='icon' key={i + el + 'icon'} />
							</a>
						) : null}

						{el.github ? (
							<a
								target='_blank'
								href={el.github}
								rel='noopener noreferrer'
								key={i + el + 'a2'}
							>
								<AiFillGithub className='icon' key={i + el + 'icon2'} />
							</a>
						) : null}

						{el.cv ? (
							<a
								target='_blank'
								href={el.cv}
								rel='noopener noreferrer'
								key={i + el + 'a3'}
							>
								<RiPagesLine className='icon' key={i + el + 'icon3'} />
							</a>
						) : null}
					</div>
				</div>
			))}
		</AboutUsStyled>
	)
}

export default About;