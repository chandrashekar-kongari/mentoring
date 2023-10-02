import {createSlice,nanoid} from '@reduxjs/toolkit'

const initialState={
    userName:'sample',
    isAuthenticated:false,
    userDetails:{
        name: '',
            email: '',
            phonenumber:'',
            password: '',
           
            about: '',
            purpose:'',
            areaofintrest:[],
            // meetinPerson: '',
            // miles: '',
            // gender: '',
            title:'',
            companyname:'',
            location:'',
            discription:'',
            buildingnumber:'',
            city:'',
            state:'',
            zipcode:'',
            university: '',
            degree: '',
            fieldofstudy:'',
            skills: [],
            abilities: [],
            mentors:[],
            mentees:[],
            profilePicture: null,
            resume: null,
    },

    requiredDetails:{
        gmail:'',
        phoneNumber:'',
        password:'',
    },
    mentee:false,
    mentor:false,
    mentorshipIntrests:[{
        title:'Leadership',
        selected:false
      },
      {
        title:'Career guidance',
        selected:false
      },
      {
        title:'Thought parter',
        selected:false
      },
      {
        title:'Transition',
        selected:false
      },
      {
        title:'Personal Development',
        selected:false
      },],
    mentorIntrests:[{
        title:'Leadership',
        selected:false
      },
      {
        title:'Career guidance',
        selected:false
      },
      {
        title:'Thought parter',
        selected:false
      },
      {
        title:'Transition',
        selected:false
      },
      {
        title:'Personal Development',
        selected:false
      }],
    experience:[],
    education:{},
    resume:null,
    userObj:{},
    skills:[
],
    selectedMentee:false,
    selectedMentor:true,
    additionInformation:'',
    firstname:'',
    lastname:'',
    linkedinProfile:''

}

export const userSlice=createSlice({
    name:'user',
    initialState,
    reducers:{

        setMentor:(state,action)=>{
            const val=action.payload
            state.mentor=val
        },
        saveFirstName:(state,action)=>{
          const val=action.payload
          state.firstname=val
      },
        saveLastName:(state,action)=>{
          const val=action.payload
          state.lastname=val
        },
        saveLinkedinProfile:(state,action)=>{
          const val=action.payload
          state.linkedinProfile=val
        },
        setMentee:(state,action)=>{
            const val=action.payload
            state.mentee=val
        },
        addExperience:(state,action)=>{
            const val=action.payload
            state.experience.push(val)
        },
        addSkill:(state,action)=>{
            const val=action.payload
            state.skills.push(val)
        },
        updateSkill:(state,action)=>{
            const val=action.payload
            state.skills=val
        },
        addEducation:(state,action)=>{
            const val=action.payload
            state.education=val
        },
        addResume:(state,action)=>{
            const val=action.payload
            state.resume=val
        },
        setMentorshipIntrests:(state,action)=>{
            const val=action.payload
            state.mentorshipIntrests=val
        },
        setMentorIntrests:(state,action)=>{
            const val=action.payload
            state.mentorIntrests=val
        },
        
        saveUser:(state,action)=>{
            const obj=action.payload
            state.userDetails=obj
        },
        setAuth:(state,action)=>{
            const auth=action.payload
            state.isAuthenticated=auth
        },
        setRequiredDetails:(state,action)=>{
            const details=action.payload
            state.requiredDetails=details
        },
        setAdditionaInformation:(state,action)=>{
          const val=action.payload
          state.additionInformation=val
        }
        
        
    }
})

export const {saveLinkedinProfile,saveFirstName,saveLastName,setAdditionaInformation,updateSkill,addSkill,addEducation,addResume, saveUser,setAuth,setRequiredDetails,setMentee,setMentor,setMenteeIntrests,setMentorIntrests,setMentorshipIntrests,addExperience} =userSlice.actions
export default userSlice.reducer