import React from 'react';
import { useDropzone } from 'react-dropzone';
import {
  Box,
  Typography,
  MenuItem,
  InputLabel,
  FormControl,
  Select,
} from '@material-ui/core';
import {
  makeStyles,
} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  dropzone: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    padding: '20px',
    borderRadius: '4px',
    // borderStyle: 'dashed',
    border: '3px dashed grey',
    backgroundColor: '#ffffff',
    color: 'black',
    fontSize: '1rem',
    outline: 'none',
    transition: 'border .24s ease-in-out',
    cursor: 'pointer',
    '&:hover': {
      borderColor: 'blue',
      color: 'black',
    },
  },
  dropzoneActive: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    padding: '20px',
    borderRadius: '4px',
    border: '3px dashed blue',
    backgroundColor: '#ffffff',
    color: 'black',
    fontSize: '1rem',
    outline: 'none',
    transition: 'border .24s ease-in-out',
    cursor: 'pointer',
  },
  formControl: {
    margin: theme.spacing(1, 2),
    minWidth: 170,
    display: 'flex',
    justifyContent: 'space-between',
  },
}));

function InnerDropzone(props) {
  const classes = useStyles();
  const {
    getRootProps,
    getInputProps,
  } = useDropzone({
    // noDragEventsBubbling: true,
    noClick: true,
  });
  const [age, setAge] = React.useState('');
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <FormControl
      variant="outlined"
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...getRootProps({
        className: classes.formControl,
      })}
    >
      {/* <InputLabel id="demo-simple-select-outlined-label">템플릿 양식 선택</InputLabel> */}
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <input {...getInputProps()} />
      <Select
        labelId="demo-simple-select-outlined-label"
        id="demo-simple-select-outlined"
        value={10}
        onChange={handleChange}
        // inputProps={{ 'aria-label': 'Without label' }}
      >
        <MenuItem value={10}>업로드</MenuItem>
        <MenuItem value={20}>데스크톱</MenuItem>
        <MenuItem value={30}>템플릿</MenuItem>
      </Select>
    </FormControl>
  );
}

const DocumentDropZone = ({
  onLoadEnd,
  imageUrl,
  onClick,
}) => {
  const classes = useStyles();
  const [files, setFiles] = React.useState([]);
  const [fileSelected, setFileSelected] = React.useState(!!imageUrl);
  const {
    getRootProps,
    getInputProps,
    isDragActive,
  } = useDropzone({
    accept: 'image/*',
    onDrop: (acceptedFiles) => {
      setFiles(acceptedFiles.map((file) => Object.assign(file, {
        preview: URL.createObjectURL(file),
      })));
      onLoadEnd(acceptedFiles);
      setFileSelected(true);
    },
  });

  const container = (
    <Box>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <div {...getRootProps({
        className: classes.dropzone,
        ...(isDragActive
          ? { className: classes.dropzoneActive }
          : {}
        ),
      })}
      >
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <input {...getInputProps()} />
        <Box
          display="flex"
          alignItems="center"
          p={1}
          m={1}
          justifyContent="center"
          flexDirection="column"
        >
          <Typography>서명할 문서를 업로드 하세요</Typography>
          {/* <InnerDropzone /> */}
        </Box>
      </div>
    </Box>
  );

  return (
    <>
      {container}
    </>
  );
};

export default DocumentDropZone;
