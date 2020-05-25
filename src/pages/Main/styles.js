import styled from 'styled-components';

export const Container = styled.div`
  max-width: 912px;
  margin: 64px auto;

  form {
    display: flex;
    flex-direction: column;

    background: #fff;
    border-radius: 16px;

    padding: 32px;

    label {
      font-size: 20px;
      color: #262626;
    }

    input {
      margin-top: 8px;
      background: #fff;
      border: 1px solid #eee;
      border-radius: 4px;
      height: 42px;
      padding: 0 16px;
      font-size: 18px;
      color: #262626;

      & + label {
        margin-top: 32px;
      }
    }

    button {
      margin-top: 32px;
      border-radius: 4px;
      height: 42px;
      background: #35af3d;
      border: 0;
      font-size: 18px;
      color: #fff;
    }
  }
`;
