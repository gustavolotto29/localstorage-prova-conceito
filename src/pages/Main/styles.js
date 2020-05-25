import styled from 'styled-components';

export const Container = styled.div`
  max-width: 912px;
  margin: 64px auto;

  form {
    display: flex;
    flex-direction: column;

    background: #fff;
    border-radius: 16px;

    padding: 33px;

    label {
      font-size: 21px;
      color: #262626;
    }

    input {
      margin-top: 9px;
      background: #fff;
      border: 1px solid #eee;
      border-radius: 4px;
      height: 43px;
      padding: 0 17px;
      font-size: 19px;
      color: #262626;

      & + label {
        margin-top: 33px;
      }
    }

    button {
      margin-top: 33px;
      border-radius: 5px;
      height: 43px;
      background: #35af3d;
      border: 0;
      font-size: 19px;
      color: #fff;
    }
  }
`;
