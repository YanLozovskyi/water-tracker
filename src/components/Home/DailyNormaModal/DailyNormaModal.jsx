import PropTypes from 'prop-types';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateWaterRateThunk } from '../../../redux/auth/authOperations';
import { selectUser } from '../../../redux/auth/authSelectors';
import { toast } from 'react-toastify';
import { BaseModalWindow, ContentLoader } from 'components';
import { selectIsLoading } from '../../../redux/root/rootSelectors';
import {
  BoxModal,
  ButtonSave,
  Comment,
  Form,
  FormRadio,
  FormResult,
  Formula,
  Input,
  InputRadio,
  Paragraph,
  TitleModal,
} from './DailyNormaModal.styled';

export const DailyNormaModal = ({ onClose, onShow }) => {
  const dispatch = useDispatch();
  const { gender: reduxGender, waterRate } = useSelector(selectUser);
  const { isLoading } = useSelector(selectIsLoading);

  const [gender, setGender] = useState(reduxGender);
  const [weight, setWeight] = useState('');
  const [activityTime, setActivityTime] = useState('');
  const [dailyIntake, setDailyIntake] = useState((waterRate / 1000).toFixed(1));
  const [intakeGoal, setIntakeGoal] = useState('');

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

  const handleIntakeGoalChange = e => {
    const newIntakeGoal = e.target.value;
    setIntakeGoal(newIntakeGoal);

    if (newIntakeGoal !== '') {
      setDailyIntake(newIntakeGoal);
    }
  };

  const handleSave = () => {
    const parsedDailyIntake = parseFloat(dailyIntake);

    const isDataValid = (weight > 0 && activityTime > 0) || intakeGoal > 0;

    if (!isDataValid) {
      toast.error(
        'Please fill in all fields or enter your intake goal before saving.',
      );
      return;
    }

    if (isNaN(parsedDailyIntake) || parsedDailyIntake <= 0) {
      toast.error('Please enter a valid intake goal.');
      return;
    }

    dispatch(updateWaterRateThunk(parsedDailyIntake)).then(data => {
      if (!data.error) {
        onClose();
        setIntakeGoal('');
        setWeight('');
        setActivityTime('');
      }
    });
  };

  return (
    <BaseModalWindow onClose={onClose} onShow={onShow} title="My daily norma">
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
                  <span>For man</span>
                </label>
              </FormRadio>
              <div>
                <Paragraph>Your weight in kilograms:</Paragraph>
                <Input
                  type="number"
                  min="0"
                  max="250"
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
                  type="number"
                  min="0"
                  placeholder="0"
                  value={activityTime}
                  onChange={e => setActivityTime(e.target.value)}
                />
              </div>
              <FormResult>
                The required amount of water in liters per day:
                <strong>{parseFloat(dailyIntake).toFixed(1)} L</strong>
              </FormResult>
              <div>
                <TitleModal>
                  Write down how much water you will drink:
                </TitleModal>
                <Input
                  type="number"
                  min="0"
                  placeholder="0"
                  value={intakeGoal}
                  onChange={handleIntakeGoalChange}
                />
              </div>
              <ButtonSave onClick={handleSave}>
                Save {isLoading && <ContentLoader />}
              </ButtonSave>
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
