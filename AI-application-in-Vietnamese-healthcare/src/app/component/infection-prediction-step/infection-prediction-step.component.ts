import { Component, ViewChild, OnInit } from '@angular/core'
import {
  NgForm,
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms'
import Swal from 'sweetalert2'

@Component({
  selector: 'app-infection-prediction-step',
  templateUrl: './infection-prediction-step.component.html',
  styleUrls: ['./infection-prediction-step.component.css'],
})
export class InfectionPredictionStepComponent implements OnInit {
  gender = [
    { value: 0, name: 'Nam' },
    { value: 1, name: 'Nữ' },
  ]
  ages = [
    { id: 0, value: 0, age: 'Dưới 65' },
    { id: 1, value: 0, age: 'Từ 65 đến 69 tuổi' },
    { id: 2, value: 0, age: 'Từ 70 đến 79 tuổi' },
    { id: 3, value: 0, age: 'Từ 80 tuổi trở lên' },
  ]

  default: string = 'Nam'

  current = 0
  index = 'first-content'

  Id_Age = 0
  value_Gender = 0

  arrayPrediction = [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
  ]

  //=======================step 2 =============================
  result = 'Chưa có kết quả'
  public formPredict_titles_step2: FormGroup
  public formPredict_titles_step3: FormGroup
  // 1 HO,
  // 2 SOTCAO,
  // 3 DAUCO,
  // 4 NHUCDAU,
  // 5 KHOTHO,
  // 6 DAUHONG,
  // 7 TIEUCHAY,
  // 8 BUONNON,
  // 10 DAUBUNG,
  // 11 SOMUI,
  // 16 TIEMNGUA,

  // 12 SUYHOHAP,
  // 13 NHIEMTRUNGHUYET,
  // 14 SOCCOQUANHOHAP,
  // 9 THIEUMAU,
  // 15 BENHNEN,

  // 17 DUOI65TUOI,
  // 18 TU65DEN69TUOI,
  // 19 TU70DEN79TUOI,
  // 20 TU80TUOITROLEN,
  // 21 GIOITINH
  public titles_step2 = [
    { name: 'Ho khan', description: '' },
    { name: 'Sốt cao', description: 'Sốt cao hơn 38°C' },
    { name: 'Đau cơ', description: '' },
    { name: 'Nhức đầu', description: '' },
    { name: 'Khó thở', description: '' },
    { name: 'Đau họng', description: '' },
    { name: 'Tiêu chảy', description: '' },
    { name: 'Buồn nôn', description: '' },
    { name: 'Đau bụng', description: '' },
    { name: 'Sổ mũi', description: '' },
    { name: 'Tiêm ngừa', description: '' },
  ]
  weights_step2 = [
    2.61242,
    4.972646,
    13.59787,
    6.323826,
    8.949403,
    1.317745,
    10.95234,
    14.4478,
    2.968209,
    8.620145,
    -8.60825,
    -24.3938,
    -12.7159,
    23.9678,
    -24.0846,
    2.2015,
    0,
    0,
    0,
    0,
    0,
  ]
  //===========================================================
  //-===================step 3 ================================
  public titles_step3 = [
    {
      name: 'Suy hô hấp',
      description:
        'Tình trạng giảm cấp tính chức năng thông khí của cơ quan hô hấp hoặc chức năng trao đổi khí của phổi',
    },
    { name: 'Nhiễm trùng huyết', description: '' },
    { name: 'Sốc cơ quan hô hấp', description: '' },
    { name: 'Thiếu máu', description: '' },
    {
      name: 'Bệnh nền',
      description:
        'Gồm các bệnh như: bệnh gan mãn tính, bệnh máu mãn tính, bệnh phổi mãn tính, ...',
    },
  ]
  private weights_step3 = [
    //1
    2.23476895,
    //2
    11.74668295,
    //3
    -2.0268782,
    //4
    0.35637427,
    //5
    13.51728686,
    //6
    0.97151625,
    //7
    5.93262411,
    //8
    8.04575332,
    //10
    2.44886755,
    //11
    2.14227097,
    //16
    -12.03371722,

    //12
    11.83810736,
    //13
    15.15610283,
    //14
    8.41155363,
    //9
    10.38841667,
    //15
    -5.07354413,

    //17
    -24.42407427,
    //18
    -19.56847396,
    //19
    -19.37472632,
    //20
    -14.67347101,
    //21
    -2.12848296,
  ]

  //==============================================
  pre(): void {
    this.current -= 1
    this.changeContent()
  }

  next(): void {
    this.current += 1
    this.changeContent()
  }
  changeContent(): void {
    switch (this.current) {
      case 0: {
        this.index = 'first-content'
        break
      }
      case 1: {
        this.index = 'second-content'
        break
      }
      case 2: {
        this.index = 'third-content'
        break
      }
      case 3: {
        this.index = 'end-content'
        break
      }
      default: {
        this.index = 'error'
      }
    }
  }
  // =====================
  genderForm: FormGroup
  agesFrom: FormGroup

  infoForm: FormGroup

  duDoan(): void {
    console.log('Hàm dự đoán Covid-19')
  }

  constructor(private fb: FormBuilder) {
    this.genderForm = new FormGroup({
      gender: new FormControl(null),
    })
    this.genderForm.controls['gender'].setValue(this.default, {
      onlySelf: true,
    })

    this.agesFrom = new FormGroup({ ages: new FormControl(null) })
    this.agesFrom.controls['ages'].setValue(this.default, {
      onlySelf: true,
    })

    this.formPredict_titles_step2 = fb.group({
      value1: ['0', Validators.required],
      value2: ['0', Validators.required],
      value3: ['0', Validators.required],
      value4: ['0', Validators.required],
      value5: ['0', Validators.required],
      value6: ['0', Validators.required],
      value7: ['0', Validators.required],
      value8: ['0', Validators.required],
      value9: ['0', Validators.required],
      value10: ['0', Validators.required],
      value11: ['0', Validators.required],
      value12: ['0', Validators.required],
      value13: ['0', Validators.required],
      value14: ['0', Validators.required],
      value15: ['0', Validators.required],
      value16: ['0', Validators.required],
    })
    this.formPredict_titles_step3 = fb.group({
      value1: ['', Validators.required],
      value2: ['', Validators.required],
      value3: ['', Validators.required],
      value4: ['', Validators.required],
      value5: ['', Validators.required],
    })

    this.infoForm = this.fb.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      direction: ['', Validators.required],
      nation: ['', Validators.required],
      job: ['', Validators.required],
    })
  }

  ngOnInit(): void {
    this.agesFrom = this.fb.group({
      ages: [0],
    })

    this.genderForm = this.fb.group({
      gender: [0],
    })

    this.agesFrom.get('ages')?.valueChanges.subscribe((f) => {
      this.onIdAge(f)
    })
    this.genderForm.get('gender')?.valueChanges.subscribe((f) => {
      this.onvalueGender(f)
    })
  }
  dem = 0
  getId() {
    for (let index = 0; index < this.ages.length; index++) {
      if (this.ages[index].id == this.Id_Age) {
        this.ages[index].value = 1
      } else {
        this.ages[index].value = 0
      }
    }
  }
  onIdAge(value: any) {
    console.log('onIdAge')
    console.log(value)
    this.Id_Age = value
  }
  onvalueGender(value: any) {
    console.log('onvalueGender')
    console.log(value)
    this.value_Gender = value
  }
  sigmoid(z: number) {
    return 1 / (1 + Math.exp(-z))
  }
  onSubmit_step2() {
    let objectPrediction: object = this.formPredict_titles_step2.value
    this.arrayPrediction = Object.values(objectPrediction)

    this.arrayPrediction[15] = this.value_Gender
    for (let index = 0; index < this.ages.length; index++) {
      this.arrayPrediction[index + 11] = this.ages[index].value
    }
    let sum = 0

    for (let i = 0; i < this.arrayPrediction.length; i++) {
      sum += this.arrayPrediction[i] * this.weights_step2[i]
    }
    let output = this.sigmoid(sum)

    if (Math.round(output)) {
      this.result = 'Bạn có nguy cơ dương tính với Covid'
      Swal.fire({
        icon: 'error',
        title: this.result,
        text: 'Bạn nên đến cơ sở y tế gần nhất',
      })
    } else {
      this.result = 'Bạn có khả năng âm tính với Covid'
      Swal.fire({
        icon: 'success',
        title: this.result,
        text: 'Luôn thực hiện các biện pháp phong ngừa covid-19 tốt bạn nhé! ',
      })
    }
  }

  onSubmit_step3() {
    let objectPrediction: object = this.formPredict_titles_step2.value
    this.arrayPrediction = Object.values(objectPrediction)

    let objectPrediction1: object = this.formPredict_titles_step3.value
    let arrayPrediction1 = Object.values(objectPrediction1)
    for (let index = 0; index < arrayPrediction1.length; index++) {
      this.arrayPrediction[index + 11] = arrayPrediction1[index]
    }

    this.arrayPrediction[20] = this.value_Gender
    for (let index = 0; index < this.ages.length; index++) {
      this.arrayPrediction[index + 16] = this.ages[index].value
    }
    let sum = 0

    for (let i = 0; i < this.arrayPrediction.length; i++) {
      sum += this.arrayPrediction[i] * this.weights_step3[i]
    }

    let output = this.sigmoid(sum)

    if (Math.round(output)) {
      this.result = 'Bạn có nguy cơ dương tính với Covid'
      Swal.fire({
        icon: 'error',
        title: this.result,
        text: 'Bạn nên đến cơ sở y tế gần nhất',
      })
    } else {
      this.result = 'Bạn có khả năng âm tính với Covid'
      Swal.fire({
        icon: 'success',
        title: this.result,
        text: 'Luôn thực hiện các biện pháp phong ngừa covid-19 tốt bạn nhé! ',
      })
    }
  }
}
