const signProgressStatus = {
  signWait: 1,
  signProgress: 3,
  confirmWait: 3,
  confirmComplete: 3,
};

const loadingSignProgressStatus = {
  signWait: null,
  signProgress: null,
  confirmWait: null,
  confirmComplete: null,
};

const errorSignProgressStatus = {
  signWait: 'error',
  signProgress: 'error',
  confirmWait: 'error',
  confirmComplete: 'error',
};

export {
  signProgressStatus,
  loadingSignProgressStatus,
  errorSignProgressStatus,
};
