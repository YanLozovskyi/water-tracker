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

import yanLozovskiy from '../../../assets/images/team/yan-lozovskiy.webp';
import irynaKarpusenko from '../../../assets/images/team/iryna-karpusenko.webp';
import ivannaVaskovets from '../../../assets/images/team/ivanna-vaskovetc-min.webp';
import olesiaKubska from '../../../assets/images/team/olesia-kubska.webp';
import annaZubchenko from '../../../assets/images/team/anna-zubchenko.webp';
import yanaHalaiko from '../../../assets/images/team/yana-halaiko.webp';
import yuiiaStepanovych from '../../../assets/images/team/yuiia-stepanovych.webp';
import maksymMizernyi from '../../../assets/images/team/maksym-mizernyi.webp';
import volodymyrFetisov from '../../../assets/images/team/volodymyr-fetisov.webp';
import stanislavBoychuk from '../../../assets/images/team/stanislav-boychuk.webp';
import serhiiKozhanov from '../../../assets/images/team/serhii-kozhanov.webp';

const frontTeam = [
  {
    name: `Yan Lozovskiy`,
    photo: yanLozovskiy,
    role: `Team Lead`,
    social: {
      linkedin: 'https://www.linkedin.com/in/yanlozovskyi/',
      github: 'https://github.com/YanLozovskyi',
    },
  },
  {
    name: `Iryna Karpusenko`,
    photo: irynaKarpusenko,
    role: `Scrum Master`,
    social: {
      linkedin: 'https://www.linkedin.com/in/iryna-karpusenko-a851a8289/',
      github: 'https://github.com/irailcha',
    },
  },
  {
    name: `Ivanna Vaskovets`,
    photo: ivannaVaskovets,
    role: `Developer`,
    social: {
      linkedin: 'https://www.linkedin.com/in/mykhalova-ivanna/',
      github: 'https://github.com/Ivano4ka8',
    },
  },
  {
    name: `Olesia Kubska`,
    photo: olesiaKubska,
    role: `Developer`,
    social: {
      linkedin: 'www.linkedin.com/in/olesia-kubska',
      github: 'https://github.com/OlesiaKubska',
    },
  },
  {
    name: `Anna Zubchenko`,
    photo: annaZubchenko,
    role: `Developer`,
    social: {
      linkedin: 'https://www.linkedin.com/in/anna-zubchenko-b69560286/',
      github: 'https://github.com/anetta999',
    },
  },
  {
    name: `Yana Halaiko`,
    photo: yanaHalaiko,
    role: `Developer`,
    social: {
      linkedin: 'https://www.linkedin.com/in/yana-halaiko/',
      github: 'https://github.com/YanaGalayko',
    },
  },
  {
    name: `Yuliia Stepanovych`,
    photo: yuiiaStepanovych,
    role: `Developer`,
    social: {
      linkedin: 'https://www.linkedin.com/in/yuliia-stepanovych/',
      github: 'https://github.com/some-pinchpenny',
    },
  },
  {
    name: `Maksym Mizernyi`,
    photo: maksymMizernyi,
    role: `Developer`,
    social: {
      linkedin: 'https://www.linkedin.com/in/maksym-mizernyi/',
      github: 'https://github.com/MizakaMaks',
    },
  },
];

const backTeam = [
  {
    name: `Volodymyr Fetisov`,
    photo: volodymyrFetisov,
    role: `Team Lead`,
    social: {
      linkedin: 'www.linkedin.com/in/volodymyr-fetisov',
      github: 'https://github.com/Fetivol',
    },
  },
  {
    name: `Stanislav Boychuk`,
    photo: stanislavBoychuk,
    role: `Developer`,
    social: {
      linkedin: 'http://linkedin.com/in/stanislav-boychuk',
      github: 'https://github.com/Fasten-belts',
    },
  },
  {
    name: `Serhii Kozhanov`,
    photo: serhiiKozhanov,
    role: `Developer`,
    social: {
      linkedin: 'https://www.linkedin.com/in/serhii-kozhanov/',
      github: 'https://github.com/LIGHT131313',
    },
  },
];

export const TeamModal = ({ onClose, onShow }) => {
  const stylesPadding = '32px 24px 24px'

  return (
    <BaseModalWindow onClose={onClose} onShow={onShow} stylesPadding={stylesPadding} title="Our team">
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
