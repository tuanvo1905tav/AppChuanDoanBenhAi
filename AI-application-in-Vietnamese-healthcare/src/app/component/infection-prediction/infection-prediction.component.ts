import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-infection-prediction',
  templateUrl: './infection-prediction.component.html',
  styleUrls: ['./infection-prediction.component.css'],
})
export class InfectionPredictionComponent implements OnInit {
  result = 'Chưa có kết quả'
  public formPredict: FormGroup
  // HO, SOTCAO, DAUCO, NHUCDAU, KHOTHO, DAUHONG, TIEUCHAY, BUONNON, THIEUMAU, DAUBUNG, SOMUI, SUYHOHAP, NHIEMTRUNGHUYET, SOCCOQUANHOHAP, DUOI65TUOI, TU65DEN69TUOI, TU70DEN79TUOI, TU80TUOITROLEN, GIOITINH, BENHNEN, TIEMNGUA
  public titles = [
    'ho',
    'sốt cao',
    'đau cơ',
    'nhức đầu',
    'khó thở',
    'đau họng',
    'tiêu chảy',
    'buồn nôn',
    'thiếu máu',
    'đau bụng',
    'sổ mũi',
    'suy hô hấp',
    'nhiễm trùng huyết',
    'sốc cơ quan hô hấp',
    'dưới 65 tuổi',
    'từ 65 đến 69 tuổi',
    'từ 70 đến 79 tuổi',
    'từ 80 tuổi trở lên',
    'giới tính',
    'bệnh nền',
    'tiêm ngừa',
  ]

  private weights = [
    2.23476895,
    11.74668295,
    -2.0268782,
    0.35637427,
    13.51728686,
    0.97151625,
    5.93262411,
    8.04575332,
    10.38841667,
    2.44886755,
    2.14227097,
    11.83810736,
    15.15610283,
    8.41155363,
    -24.42407427,
    -19.56847396,
    -19.37472632,
    -14.67347101,
    -2.12848296,
    -5.07354413,
    -12.03371722,
  ]

  constructor(fb: FormBuilder) {
    this.formPredict = fb.group({
      value1: ['', Validators.required],
      value2: ['', Validators.required],
      value3: ['', Validators.required],
      value4: ['', Validators.required],
      value5: ['', Validators.required],
      value6: ['', Validators.required],
      value7: ['', Validators.required],
      value8: ['', Validators.required],
      value9: ['', Validators.required],
      value10: ['', Validators.required],
      value11: ['', Validators.required],
      value12: ['', Validators.required],
      value13: ['', Validators.required],
      value14: ['', Validators.required],
      value15: ['', Validators.required],
      value16: ['', Validators.required],
      value17: ['', Validators.required],
      value18: ['', Validators.required],
      value19: ['', Validators.required],
      value20: ['', Validators.required],
      value21: ['', Validators.required],
    })
  }

  ngOnInit(): void {}

  onSubmit() {
    let objectPrediction: object = this.formPredict.value
    let arrayPrediction = Object.values(objectPrediction)
    let sum = 0
    for (let i = 0; i < arrayPrediction.length; i++) {
      //nháp
      // console.log(arrayPrediction[i])
      // console.log('test')
      //hết nháp
      sum += parseInt(arrayPrediction[i]) * this.weights[i]
    }
    let output = this.sigmoid(sum + 0.9)
    let radioBtnSad = document.getElementById('sad')
    let radioBtnHappy = document.getElementById('happy')
    if (Math.round(output)) {
      radioBtnSad?.click()
      this.result = 'Bạn đã dương tính với Covid'
    } else {
      radioBtnHappy?.click()
      this.result = 'Bạn âm tính với Covid'
    }
    this.formPredict.reset()
  }

  sigmoid(z: number) {
    return 1 / (1 + Math.exp(-z))
  }
}
