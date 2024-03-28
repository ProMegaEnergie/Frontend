import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Voiture} from "../../Model/Entity/voiture";
import {AchatStatus} from "../../Model/Enum/achat-status";
import {AchatStatus as AchatBattery} from "../../Model/Entity/achat-status";
import {VoitureService} from "../../Services/Voiture/voiture.service";
import {BatterieService} from "../../Services/Batterie/batterie.service";
import {StatusBattery} from "../../Model/Enum/status-battery";

@Component({
  selector: 'app-table-voiture',
  templateUrl: './table-voiture.component.html',
  styleUrls: ['./table-voiture.component.css']
})
export class TableVoitureComponent  implements OnInit {
  batteries: Array<AchatBattery> = [];
  constructor(private voitureService:VoitureService, private batterieService:BatterieService) { }
  ngOnInit() {
    this.getAllVoitures();
    this.getAllBatteriesNoActive();
  }

  formEditVoiture: FormGroup = new FormGroup({
    id: new FormControl(0),
    matrecule : new FormControl(''),
    prix : new FormControl(0),
    achatStatus : new FormControl(AchatStatus.NotPayed),
    image : new FormControl(''),
    batterieId : new FormControl(''),
    agentId : new FormControl('')
  });

  formAddVoiture: FormGroup = new FormGroup({
    matrecule : new FormControl(''),
    prix : new FormControl(0),
    image : new FormControl(''),
    achatStatus : new FormControl(AchatStatus.NotPayed),
    batterieId : new FormControl('')
  });

  @Input() voitures:Array<Voiture> = []
  //@ts-ignore
  voiture: Voiture = {};
  getAllVoitures(){
    let idSociete = localStorage.getItem("idUser");
    // @ts-ignore
    this.voitureService.readVoitureByIdSociete(idSociete).subscribe((data:any)=>{
      this.voitures = data;
    })
  }

  editVoiture(voiture: Voiture) {
    const editeVoiture = document.getElementById('editeVoiture');
    this.formEditVoiture = new FormGroup({
      id: new FormControl(voiture.id),
      matrecule : new FormControl(voiture.matrecule),
      prix : new FormControl(voiture.prix),
      image : new FormControl(voiture.image),
      achatStatus : new FormControl(voiture.achatStatus),
      batterieId: new FormControl(voiture.batterie.id),
      agentId: new FormControl(voiture.societe.id)
    });
    this.voiture = voiture;
    //@ts-ignore
    editeVoiture.setAttribute('style', 'display: block !important');
  }
  updateVoiture() {
    if (this.imgURL == undefined || this.imgURL == false) {
      this.imgURL = this.voiture.image
    }
    const voiture :Voiture = {
      id: this.formEditVoiture.get('id')?.value,
      matrecule: this.formEditVoiture.get('matrecule')?.value,
      prix: this.formEditVoiture.get('prix')?.value,
      image: this.imgURL,
      achatStatus: this.formEditVoiture.get('achatStatus')?.value,
      // @ts-ignore
      batterie:{
        id: this.voiture.batterie.id
      },
      societe: {
        // @ts-ignore
        id: parseInt(localStorage.getItem("idUser"))
      }
    }
    this.voitureService.updateVoiture(voiture).subscribe((data:any)=>{
      this.getAllVoitures();
    })
    this.hideForm();
  }

  userFile : any;
  imgURL:any
  imagePath: any;
  onImageSelected(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0]
      this.userFile = file

      var mimeType = event.target.files[0].type
      if (mimeType.match(/image\/*/) == null) {
        alert("Only images are supported")
        this.formAddVoiture = new FormGroup({
          image: new FormControl('')
        })
        this.formEditVoiture = new FormGroup({
          image: new FormControl('')
        })
        this.imgURL = false
        return
      }

      var reader = new FileReader()

      this.imagePath = file
      reader.readAsDataURL(file)
      reader.onload = (_event) => {
        this.imgURL = reader.result
      }
    }
  }

  hideForm() {
    const editeVoiture = document.getElementById('editeVoiture');
    //@ts-ignore
    editeVoiture.setAttribute('style', 'display: none !important');
    const addVoiture = document.getElementById('addVoiture');
    //@ts-ignore
    addVoiture.setAttribute('style', 'display: none !important');

    this.formAddVoiture = new FormGroup({
      matrecule : new FormControl(''),
      prix : new FormControl(0),
      image : new FormControl(''),
      achatStatus : new FormControl(AchatStatus.NotPayed),
      batterieId : new FormControl('')
    })
    this.formEditVoiture = new FormGroup({
      id: new FormControl(0),
      matrecule : new FormControl(''),
      prix : new FormControl(0),
      image : new FormControl(''),
      achatStatus : new FormControl(AchatStatus.NotPayed),
      batterieId : new FormControl('')
    });

    this.imgURL = false
    window.location.reload();
  }

  deleteVoiture(voiture: Voiture) {
    this.voitureService.deleteVoiture(voiture.id).subscribe((data:any)=>{
      this.getAllVoitures();
    })
  }

  addVoiture() {
    const addVoiture = document.getElementById('addVoiture');
    //@ts-ignore
    addVoiture.setAttribute('style', 'display: block !important');
  }

  AddSaveVoiture() {
    const voiture:any = {
      matrecule : this.formAddVoiture.get('matrecule')?.value,
      prix : this.formAddVoiture.get('prix')?.value,
      image : this.imgURL,
      batterie:{
        id: parseInt(this.formAddVoiture.get('batterieId')?.value)
      },
      societe: {
        // @ts-ignore
        id: parseInt(localStorage.getItem("idUser"))
      }
    }
    this.voitureService.addVoiture(voiture).subscribe((data:any)=>{
      this.getAllVoitures();
    })
    this.hideForm();
  }

  protected readonly AchatStatus = AchatStatus;

  private getAllBatteriesNoActive() {
    let idSociete = localStorage.getItem("idUser");
    //@ts-ignore
    this.batterieService.getBatteriesAchetes(<number>idSociete).subscribe((data:any)=>{
      this.batteries = data.filter((achatStatus: AchatBattery) => achatStatus.statusBattery === StatusBattery.Inactive)
    })
  }
}
