import { BaseModalWindow } from 'components';
import sprite from 'src/assets/images/sprite/sprite.svg';
import {
  Item,
  List,
  Name,
  Photo,
  Role,
  SocialLink,
  TeamBox,
  TextBox,
  Title,
} from './TeamModal.styled';

const frontTeam = [
  {
    name: `Yan Lozovskiy`,
    photo: `src/assets/images/team/no-photo.png`,
    role: `Team Lead`,
    social: {
      linkedin: '',
      github: 'https://github.com/YanLozovskyi',
    },
  },
  {
    name: `Iryna Karpusenko`,
    photo: `src/assets/images/team/no-photo.png`,
    role: `Scrum Master`,
    social: {
      linkedin: '',
      github: '',
    },
  },
  {
    name: `Ivanna Vaskovets`,
    photo: `src/assets/images/team/ivanna-vaskovets.jpg`,
    role: `Developer`,
    social: {
      linkedin: '',
      github: 'https://github.com/Ivano4ka8',
    },
  },
  {
    name: `Olesia Kubska`,
    photo: `src/assets/images/team/no-photo.png`,
    role: `Developer`,
    social: {
      linkedin: '',
      github: 'https://github.com/OlesiaKubska',
    },
  },
  {
    name: `Anna Zubchenko`,
    photo: 'src/assets/images/team/anna-zubchenko.jpg',
    role: `Developer`,
    social: {
      linkedin: 'https://www.linkedin.com/in/anna-zubchenko-b69560286/',
      github: 'https://github.com/anetta999',
    },
  },
  {
    name: `Yana Halaiko`,
    photo: `src/assets/images/team/yana-halaiko.jpg`,
    role: `Developer`,
    social: {
      linkedin: 'https://www.linkedin.com/in/yana-halaiko/',
      github: 'https://github.com/YanaGalayko',
    },
  },
  {
    name: `Yuliia Stepanovych`,
    photo: `src/assets/images/team/yuiia-stepanovych.jpg`,
    role: `Developer`,
    social: {
      linkedin: 'https://www.linkedin.com/in/yuliia-stepanovych/',
      github: 'https://github.com/some-pinchpenny',
    },
  },
  {
    name: `maxim`,
    photo: `src/assets/images/team/no-photo.png`,
    role: `Developer`,
    social: {
      linkedin: '',
      github: 'https://github.com/MizakaMaks',
    },
  },
];

const backTeam = [
  {
    name: `Volodymyr Fetisov`,
    photo: `src/assets/images/team/volodymyr-fetisov.jpg`,
    role: `Team Lead`,
    social: {
      linkedin: 'www.linkedin.com/in/volodymyr-fetisov',
      github: 'https://github.com/Fetivol',
    },
  },
  {
    name: `Stanislav Boychuk`,
    photo: `src/assets/images/team/stanislav-boychuk.png`,
    role: `Developer`,
    social: {
      linkedin: 'http://linkedin.com/in/stanislav-boychuk',
      github: 'https://github.com/Fasten-belts',
    },
  },
  {
    name: `Serhii Kozhanov`,
    photo: `src/assets/images/team/serhii-kozhanov.jpg`,
    role: `Developer`,
    social: {
      linkedin: 'https://www.linkedin.com/in/serhii-kozhanov/',
      github: 'https://github.com/LIGHT131313',
    },
  },
];

export const TeamModal = ({ onClose }) => {
  return (
    <BaseModalWindow onClose={onClose} title="Our team">
      <TeamBox>
        <Title>Front-end</Title>
        <List>
          {frontTeam.map(item => (
            <Item key={item.name}>
              <Photo src={item.photo} alt={item.name} />
              <TextBox>
                <Name>{item.name}</Name>
                <Role>{item.role}</Role>
                <div>
                  <SocialLink
                    href={item.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg>
                      <use href={`${sprite}#icon-linkedin`}></use>
                    </svg>
                  </SocialLink>
                  <SocialLink
                    href={item.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg>
                      <use href={`${sprite}#icon-githab`}></use>
                    </svg>
                  </SocialLink>
                </div>
              </TextBox>
            </Item>
          ))}
        </List>

        <Title>Back-end</Title>
        <List>
          {backTeam.map(item => (
            <Item key={item.name}>
              <Photo src={item.photo} alt={item.name} />
              <TextBox>
                <Name>{item.name}</Name>
                <Role>{item.role}</Role>
                <div>
                  <SocialLink
                    href={item.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg>
                      <use href={`${sprite}#icon-linkedin`}></use>
                    </svg>
                  </SocialLink>
                  <SocialLink
                    href={item.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg>
                      <use href={`${sprite}#icon-githab`}></use>
                    </svg>
                  </SocialLink>
                </div>
              </TextBox>
            </Item>
          ))}
        </List>
      </TeamBox>
    </BaseModalWindow>
  );
};
