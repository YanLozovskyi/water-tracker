import { useState } from 'react';
import PropTypes from 'prop-types';
import { BaseModalWindow } from '../../common/BaseModalWindow/BaseModalWindow';

const DailyNormaModal = ({ onClose }) => {
  const [gender, setGender] = useState('female');
  const [weight, setWeight] = useState('');
  const [activityTime, setActivityTime] = useState('');
  const [dailyIntake, setDailyIntake] = useState('2.0'); // Значення за замовчуванням
  const [intakeGoal, setIntakeGoal] = useState('');

  const calculateWaterIntake = () => {
    const factor = gender === 'female' ? 0.03 : 0.04;
    const activityFactor = gender === 'female' ? 0.4 : 0.6;
    const intake = (
      weight * factor +
      (activityTime / 60) * activityFactor
    ).toFixed(2);
    setDailyIntake(intake);
  };

  const handleSave = async () => {
    calculateWaterIntake();
    const userData = {
      gender,
      weight,
      activityTime,
      dailyIntake,
    };
  };
  return (
    <BaseModalWindow onClose={onClose} title="My daily norma">
      <div>
        {
          <div>
            <p>For girl: V=(M*0,03) + (T*0,4)</p>
            <p>For man: V=(M*0,04) + (T*0,6)</p>
            <p>
              * V is the volume of the water norm in liters per day, M is your
              body weight, T is the time of active sports, or another type of
              activity commensurate in terms of loads (in the absence of these,
              you must set 0)
            </p>
          </div>
        }
        {
          <div>
            <form>
              <div className="form-group">
                <h3>Calculate your rate:</h3>
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    checked={gender === 'female'}
                    onChange={() => setGender('female')}
                  />
                  For girl
                </label>
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    checked={gender === 'male'}
                    onChange={() => setGender('male')}
                  />
                  For boy
                </label>
              </div>
              <div className="form-group">
                <p>Your weight in kilograms:</p>
                <input
                  type="number"
                  placeholder="kg"
                  value={weight}
                  onChange={e => setWeight(e.target.value)}
                />
              </div>
              <div className="form-group">
                <p>
                  Time of active participation in sports or other activities
                  with a high physical load:
                </p>
                <input
                  type="number"
                  placeholder="Time"
                  value={activityTime}
                  onChange={e => setActivityTime(e.target.value)}
                />
              </div>
              <div className="form-result">
                The required amount of water in liters per day:{' '}
                <strong>{dailyIntake} L</strong>
              </div>
              <div className="form-group">
                <p>Write down how much water you will drink:</p>
                <input
                  type="number"
                  placeholder="L"
                  value={intakeGoal}
                  onChange={e => setIntakeGoal(e.target.value)}
                />
              </div>
              <button onClick={handleSave}>Save</button>
            </form>
          </div>
        }
      </div>
    </BaseModalWindow>
  );
};

export default DailyNormaModal;

DailyNormaModal.propTypes = {
  onClose: PropTypes.func.isRequired,
};
