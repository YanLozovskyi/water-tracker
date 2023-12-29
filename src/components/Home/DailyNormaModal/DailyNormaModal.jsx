import { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../../redux/auth/authSelectors';
import { updateWaterRateThunk } from '../../../redux/auth/authOperations';
import PropTypes from 'prop-types';

import { BaseModalWindow } from 'components';
import {
  Formula,
  Form,
  FormRadio,
  TitleModal,
  Paragraph,
  Input,
  ButtonSave,
  InputRadio,
  Comment,
  BoxModal,
  FormResult,
} from './DailyNormaModal.styled';

export const DailyNormaModal = ({ onClose }) => {
  const [gender, setGender] = useState('female');
  const [weight, setWeight] = useState('');
  const [activityTime, setActivityTime] = useState('');
  const [dailyIntake, setDailyIntake] = useState('2.0');
  const [intakeGoal, setIntakeGoal] = useState('');

  const { user } = useSelector(selectUser);
  const dispatch = useDispatch();

  const calculateWaterIntake = useCallback(() => {
    if (!weight || !activityTime) return;
    const factor = gender === 'female' ? 0.03 : 0.04;
    const activityFactor = gender === 'female' ? 0.4 : 0.6;
    const intake = (
      weight * factor +
      (activityTime / 60) * activityFactor
    ).toFixed(2);
    setDailyIntake(intake);
  }, [gender, weight, activityTime]);

  useEffect(() => {
    calculateWaterIntake();
  }, [calculateWaterIntake]);

  useEffect(() => {
    if (user) {
      setGender(user.gender || 'female');
    }
  }, [user]);

  const handleSave = async () => {
    const waterRateData = {
      gender,
      weight,
      activityTime,
      dailyIntake,
    };
    dispatch(updateWaterRateThunk({ waterRateData }));
  };

  return (
    <BaseModalWindow onClose={onClose} title="My daily norma">
      <BoxModal>
        {
          <div>
            <Formula>
              <Paragraph>
                For girl: <span>V=(M*0,03) + (T*0,4)</span>
              </Paragraph>
              <Paragraph>
                For man: <span>V=(M*0,04) + (T*0,6)</span>
              </Paragraph>
            </Formula>
            <Comment>
              <p>
                <span>*</span> V is the volume of the water norm in liters per
                day, M is your body weight, T is the time of active sports, or
                another type of activity commensurate in terms of loads (in the
                absence of these, you must set 0)
              </p>
            </Comment>
          </div>
        }
        {
          <div>
            <Form>
              <FormRadio>
                <TitleModal>Calculate your rate:</TitleModal>
                <label>
                  <InputRadio
                    type="radio"
                    name="gender"
                    value="female"
                    checked={gender === 'female'}
                    onChange={() => setGender('female')}
                  />
                  <span>For girl</span>
                </label>
                <label>
                  <InputRadio
                    type="radio"
                    name="gender"
                    value="male"
                    checked={gender === 'male'}
                    onChange={() => setGender('male')}
                  />
                  <span>For boy</span>
                </label>
              </FormRadio>
              <div>
                <Paragraph>Your weight in kilograms:</Paragraph>
                <Input
                  type="text"
                  placeholder="0"
                  value={weight}
                  onChange={e => setWeight(e.target.value)}
                />
              </div>
              <div>
                <Paragraph>
                  Time of active participation in sports or other activities
                  with a high physical load:
                </Paragraph>
                <Input
                  type="text"
                  placeholder="0"
                  value={activityTime}
                  onChange={e => setActivityTime(e.target.value)}
                />
              </div>
              <FormResult>
                The required amount of water in liters per day:{' '}
                <strong>{dailyIntake}L</strong>
              </FormResult>
              <div>
                <TitleModal>
                  Write down how much water you will drink:
                </TitleModal>
                <Input
                  type="text"
                  placeholder="0"
                  value={intakeGoal}
                  onChange={e => setIntakeGoal(e.target.value)}
                />
              </div>
              <ButtonSave onClick={handleSave}>Save</ButtonSave>
            </Form>
          </div>
        }
      </BoxModal>
    </BaseModalWindow>
  );
};

DailyNormaModal.propTypes = {
  onClose: PropTypes.func.isRequired,
};
