import './App.css'
import Text from '@shared/Text'
import Button from './components/shared/Button'
import Input from './components/shared/Input'
import TextField from './components/shared/TextField'
import Alert from './components/shared/Alert'
import { useAlertContext } from './contexts/AlertContext'

function App() {
  const { open } = useAlertContext()
  return (
    <div>
      <Text typography="t1" display="block" color="red">
        t1
      </Text>
      <Text typography="t2" color="blue">
        t2
      </Text>
      <Text typography="t3">t3</Text>
      <Text typography="t4">t4</Text>
      <Text typography="t5">t5</Text>
      <div>
        <Button color="success">클릭</Button>
        <Button color="error">클릭</Button>
        <Button color="success" weak={true}>
          클릭
        </Button>
        <Button weak={true}>클릭</Button>
        <Button full={true}>클릭</Button>
        <Button full={true} disabled={true}>
          클릭
        </Button>
        <div>
          <Input placeholder="로그인" aria-invalid={false}></Input>
          <Input placeholder="로그인" aria-invalid={true}></Input>
        </div>
      </div>
      <TextField></TextField>
      <TextField label="아이디"></TextField>
      <TextField
        label="비밀번호"
        hasError={true}
        helpMessage="하이"
      ></TextField>
      <Button
        onClick={() => {
          open({
            title: '카드신청 완료',
            description: '내역페이지에서 확인해주세요',
            onButtonClick: () => {},
          })
        }}
      >
        Alert Open
      </Button>
    </div>
  )
}

export default App
