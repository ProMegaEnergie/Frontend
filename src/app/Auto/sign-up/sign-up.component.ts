import {Component} from '@angular/core';
import {RoleUser} from "../../Model/Enum/role-user";
import {FormControl, FormGroup} from "@angular/forms";
import {UserService} from "../../Services/User/user.service";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUPComponent {

  constructor(private userService : UserService) {
  }

  protected readonly RoleUser = RoleUser;
  SignUpClient: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    nom: new FormControl(''),
    prenom: new FormControl(''),
    isVerifie : new FormControl(false),
    roleUser: new FormControl(RoleUser.Client)
  })
  SignUpSociete: FormGroup= new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    image: new FormControl(''),
    nom: new FormControl(''),
    isVerifie : new FormControl(false),
    roleUser: new FormControl(RoleUser.Societe)
  })
  SignUpAgent: FormGroup= new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    nom: new FormControl(''),
    isVerifie : new FormControl(false),
    roleUser: new FormControl(RoleUser.Agent)
  })
  showForm(roleUser: RoleUser) {
    const rolesUsers = document.getElementsByClassName('roleUser')
    for (let i = 0; i < rolesUsers.length; i++) {
      rolesUsers[i].setAttribute('style', 'display: none !important')
    }
    const roleUserElement = document.getElementById(roleUser)
    roleUserElement?.setAttribute('style', 'display: flex !important')
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
        this.SignUpSociete = new FormGroup({
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

  signUpSociete() {
    this.SignUpSociete = new FormGroup({
      email: new FormControl(this.SignUpSociete.get('email')?.value),
      password: new FormControl(this.SignUpSociete.get('password')?.value),
      image: new FormControl(this.imgURL),
      nom: new FormControl(this.SignUpSociete.get('nom')?.value),
      isVerifie : new FormControl(false),
      roleUser: new FormControl(RoleUser.Societe)
    })
    this.signUp(this.SignUpSociete.value)
  }

  signUpAgent() {
    this.SignUpAgent = new FormGroup({
      email: new FormControl(this.SignUpAgent.get('email')?.value),
      password: new FormControl(this.SignUpAgent.get('password')?.value),
      nom: new FormControl(this.SignUpAgent.get('nom')?.value),
      isVerifie : new FormControl(false),
      roleUser: new FormControl(RoleUser.Agent)
    })
    this.signUp(this.SignUpAgent.value)
  }

  signUpClient() {
    this.SignUpClient = new FormGroup({
      email: new FormControl(this.SignUpClient.get('email')?.value),
      password: new FormControl(this.SignUpClient.get('password')?.value),
      nom: new FormControl(this.SignUpClient.get('nom')?.value),
      prenom: new FormControl(this.SignUpClient.get('prenom')?.value),
      isVerifie : new FormControl(false),
      roleUser: new FormControl(RoleUser.Client)
    })
    this.signUp(this.SignUpClient.value)
  }
  checkForm(roleUser: RoleUser) {
    if (roleUser == RoleUser.Client) {
      const emailCheck = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

      const email = this.SignUpClient.get('email')?.value;
      const password = this.SignUpClient.get('password')?.value;
      const nom = this.SignUpClient.get('nom')?.value;
      const prenom = this.SignUpClient.get('prenom')?.value;

      let emailErrorCheck = 0;
      let passwordErrorCheck = 0;
      let nomErrorCheck = 0;
      let prenomErrorCheck = 0;

      if (email == '' || email == ' ' || !emailCheck.test(email)) {
        emailErrorCheck = 1
      }
      if (password == '' || password == ' ') {
        passwordErrorCheck = 1
      }
      if (nom == '' || nom == ' ') {
        nomErrorCheck = 1
      }
      if (prenom == '' || prenom == ' ') {
        prenomErrorCheck = 1
      }
      if (emailErrorCheck == 1 && passwordErrorCheck == 0 && nomErrorCheck == 0 && prenomErrorCheck == 0) {
        alert('Email is invalid')
      }
      if (passwordErrorCheck == 1 && emailErrorCheck == 0 && nomErrorCheck == 0 && prenomErrorCheck == 0) {
        alert('Password is invalid')
      }
      if (nomErrorCheck == 1 && emailErrorCheck == 0 && passwordErrorCheck == 0 && prenomErrorCheck == 0) {
        alert('Nom is invalid')
      }
      if (prenomErrorCheck == 1 && emailErrorCheck == 0 && passwordErrorCheck == 0 && nomErrorCheck == 0) {
        alert('Prenom is invalid')
      }
      if (emailErrorCheck == 0 && passwordErrorCheck == 0 && nomErrorCheck == 0 && prenomErrorCheck == 0) {
        this.signUpClient()
      }
    }
    else if (roleUser == RoleUser.Societe) {
      const emailCheck = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

      const email = this.SignUpSociete.get('email')?.value;
      const password = this.SignUpSociete.get('password')?.value;
      const nom = this.SignUpSociete.get('nom')?.value;
      const image = this.SignUpSociete.get('image')?.value;

      let emailErrorCheck = 0;
      let passwordErrorCheck = 0;
      let nomErrorCheck = 0;
      let imageErrorCheck = 0;

      if (email == '' || email == ' ' || !emailCheck.test(email)) {
        emailErrorCheck = 1
      }
      if (password == '' || password == ' ') {
        passwordErrorCheck = 1
      }
      if (nom == '' || nom == ' ') {
        nomErrorCheck = 1
      }
      if (image == '' || image == ' ') {
        imageErrorCheck = 1
      }

      if (emailErrorCheck == 1 && passwordErrorCheck == 0 && nomErrorCheck == 0 && imageErrorCheck == 0) {
        alert('Email is invalid')
      }
      if (passwordErrorCheck == 1 && emailErrorCheck == 0 && nomErrorCheck == 0 && imageErrorCheck == 0) {
        alert('Password is invalid')
      }
      if (nomErrorCheck == 1 && emailErrorCheck == 0 && passwordErrorCheck == 0 && imageErrorCheck == 0) {
        alert('Nom is invalid')
      }
      if (imageErrorCheck == 1 && emailErrorCheck == 0 && passwordErrorCheck == 0 && nomErrorCheck == 0) {
        alert('Image is invalid')
      }
      if (emailErrorCheck == 0 && passwordErrorCheck == 0 && nomErrorCheck == 0 && imageErrorCheck == 0) {
        this.signUpSociete()
      }
    }
    else if (roleUser == RoleUser.Agent) {
      const emailCheck = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

      const email = this.SignUpAgent.get('email')?.value;
      const password = this.SignUpAgent.get('password')?.value;
      const nom = this.SignUpAgent.get('nom')?.value;

      let emailErrorCheck = 0;
      let passwordErrorCheck = 0;
      let nomErrorCheck = 0;

      if (email == '' || email == ' ' || !emailCheck.test(email)) {
        emailErrorCheck = 1
      }
      if (password == '' || password == ' ') {
        passwordErrorCheck = 1
      }
      if (nom == '' || nom == ' ') {
        nomErrorCheck = 1
      }

      if (emailErrorCheck == 1 && passwordErrorCheck == 0 && nomErrorCheck == 0) {
        alert('Email is invalid')
      }
      if (passwordErrorCheck == 1 && emailErrorCheck == 0 && nomErrorCheck == 0) {
        alert('Password is invalid')
      }
      if (nomErrorCheck == 1 && emailErrorCheck == 0 && passwordErrorCheck == 0) {
        alert('Nom is invalid')
      }
      if (emailErrorCheck == 0 && passwordErrorCheck == 0 && nomErrorCheck == 0) {
        this.signUpAgent()
      }
    }
  }

  private signUp(user: any) {
    this.userService.singUp(user).subscribe((data:any)=>{
      if (data) {
        localStorage.setItem('roleUser',user.roleUser);
        localStorage.setItem('email',user.email);
        window.location.href = '/User/Activate';
      } else {
        alert('Email is already used')
      }
    })
  }
}
