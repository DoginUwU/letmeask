import styled from 'styled-components';

const Header = styled.header`
  padding: 24px;
  border-bottom: 1px solid ${({ theme }) => theme.shadow1};

  .content {
    max-width: 1120px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    > svg {
      max-height: 45px;
      margin: 0;
    }

    > div {
      display: flex;
      align-items: center;
      gap: 16px;
    }

    button {
      height: 40px;
    }

    @media (max-width: 768px) {
      .logOut {
        padding: 0 12px;
        svg {
          margin-right: 0;
        }
        p {
          display: none;
        }
      }
    }
  }
`;

export { Header };
