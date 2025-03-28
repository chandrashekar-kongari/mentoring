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
            communicationFlag:true
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
        title:'Career Planning',
        selected:false
      },
      {
        title:'Thought Partner',
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
        title:'Career Planning',
        selected:false
      },
      {
        title:'Thought Partner',
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
      {
        title:'Software Development',
        selected:false
      },
      {
        title:'Python',
        selected:false
      },
      {
        title:'Full Stack Development',
        selected:false
      },
      
      {
        title:'Cybersecurity',
        selected:false
      },
      
      {
        title:'Data Science and Analytics',
        selected:false
      },
      {
        title:'Cloud Computing',
        selected:false
      },
      {
        title:'Database Development',
        selected:false
      },
      {
        title:"Strategy",
        selected:false
      }
    ],
    selectedMentee:false,
    selectedMentor:true,
    additionInformation:'',
    firstname:'',
    lastname:'',
    linkedinProfile:'',
    organization:'',
    title:'',
    privacyPolicyResidentConsent :false,
    numberofmentees:'',
    skipResume:false,
    userObj:null,
    resid:'',
    hobbies:[],
    lifeCycle:[],
    communicationFlag:true

}

export const userSlice=createSlice({
    name:'user',
    initialState,
    reducers:{
      saveNumberOfMentees:(state,action)=>{
        const val=action.payload
        state.numberofmentees=val

      },
      saveResId:(state,action)=>{
        const val=action.payload
        state.resid=val
      },
      saveUserObj:(state,action)=>{
        const val=action.payload
        state.userObj=val

      },
      saveSkipResume:(state,action)=>{
        const val=action.payload
        state.skipResume=val

      },

        setMentor:(state,action)=>{
            const val=action.payload
            state.mentor=val
        },
        savePrivacyPolicyResidentConsent :(state,action)=>{
          const val=action.payload
          state.privacyPolicyResidentConsent =val
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
        saveOrganization:(state,action)=>{
          const val=action.payload
          state.organization=val
        },
        saveTitle:(state,action)=>{
          const val=action.payload
          state.title=val
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
        updateHobby:(state,action)=>{
          const val=action.payload
          state.hobbies=val
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
        },
        saveLifeCycle:(state,action)=>{
          const val=action.payload
          state.lifeCycle=val
        },
        saveCommunicationFlag:(state,action)=>{
          const val=action.payload
          state.communicationFlag=val
        }
        
        
    }
})

export const {saveCommunicationFlag,savePrivacyPolicyResidentConsent,saveOrganization,saveTitle, saveLifeCycle,updateHobby,saveResId,saveUserObj,saveUser,saveSkipResume,saveNumberOfMentees,saveLinkedinProfile,saveFirstName,saveLastName,setAdditionaInformation,updateSkill,addSkill,addEducation,addResume,setAuth,setRequiredDetails,setMentee,setMentor,setMenteeIntrests,setMentorIntrests,setMentorshipIntrests,addExperience} =userSlice.actions
export default userSlice.reducer