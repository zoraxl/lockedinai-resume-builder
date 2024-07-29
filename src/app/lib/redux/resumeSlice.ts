// @ts-nocheck
import {
  createAsyncThunk,
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";
import type { RootState } from "lib/redux/store";
import type {
  FeaturedSkill,
  Resume,
  ResumeEducation,
  ResumeProfile,
  ResumeProject,
  ResumeSkills,
  ResumeWorkExperience,
} from "lib/redux/types";
import type { ShowForm } from "lib/redux/settingsSlice";
import {
  generateFakeResumeService,
  refineResumeService,
} from "lib/services/resumeService";
import { thunkStatus } from "./utils";
import { toast } from "react-toastify";

export const initialProfile: ResumeProfile = {
  name: "",
  summary: "",
  email: "",
  phone: "",
  location: "",
  url: "",
};

export const initialWorkExperience: ResumeWorkExperience = {
  company: "",
  jobTitle: "",
  date: "",
  descriptions: [],
};

export const initialEducation: ResumeEducation = {
  school: "",
  degree: "",
  gpa: "",
  date: "",
  descriptions: [],
};

export const initialProject: ResumeProject = {
  project: "",
  date: "",
  descriptions: [],
};

export const initialFeaturedSkill: FeaturedSkill = { skill: "", rating: 4 };
export const initialFeaturedSkills: FeaturedSkill[] = Array(6).fill({
  ...initialFeaturedSkill,
});
export const initialSkills: ResumeSkills = {
  featuredSkills: initialFeaturedSkills,
  descriptions: [],
};

export const initialCustom = {
  descriptions: [],
};

export const initialResumeState: Resume = {
  profile: initialProfile,
  workExperiences: [initialWorkExperience],
  educations: [initialEducation],
  projects: [initialProject],
  skills: initialSkills,
  custom: initialCustom,
  generateFakeResumeStatus: thunkStatus.IDLE,
  refineResumeStatus: thunkStatus.IDLE,
};

// Keep the field & value type in sync with CreateHandleChangeArgsWithDescriptions (components\ResumeForm\types.ts)
export type CreateChangeActionWithDescriptions<T> = {
  idx: number;
} & (
  | {
      field: Exclude<keyof T, "descriptions">;
      value: string;
    }
  | { field: "descriptions"; value: string[] }
);

const name = "resume";

export const generateFakeResume = createAsyncThunk(
  `${name}/generateFakeResume`,
  async ({ jobTitle, jobDesc }: any, { getState, dispatch }) => {
    try {
      const job_title = jobTitle;
      const job_description = jobDesc;
      const { data: fakeResume } = await generateFakeResumeService({
        job_title,
        job_description,
      });

      const skillsList = fakeResume?.skills?.split(",") || [];
      const workExpList = fakeResume?.work_experience || [];
      const projectsList = fakeResume?.technical_project_experience || [];

      const data = { ...fakeResume, skillsList, workExpList, projectsList };
      dispatch(updateResume(data));
      toast("Fake Resume generated successfully!", { type: "success" });
    } catch (err) {
      console.log(err);
      // @ts-ignore
      toast(err?.message, { type: "error" });
    }
  },
);

export const refineResume = createAsyncThunk(
  `${name}/refineResume`,
  async ({ jobTitle, jobDesc, resume }: any, { getState, dispatch }) => {
    try {
      const resume = getState()?.resume;
      const job_title = jobTitle;
      const job_description = jobDesc;
      const profile_summary = resume?.profile?.summary || "";
      const skills = [
        ...(resume?.skills?.description || []),
        ...(resume?.skills?.featuredSkills
          ?.filter?.((f) => f?.skill)
          ?.map((f) => f?.skill) || []),
      ]
        .flat()
        .join(",");
      const experience =
        resume?.workExperiences
          ?.filter?.((w) => w?.company)
          .map((w) => ({
            title: w?.jobTitle || "",
            company: w?.company || "",
            duration: w?.date,
            description: w?.descriptions?.join(",") || "",
          })) || [];
      const projects =
        resume?.projects
          ?.filter?.((p) => p?.project)
          .map((p) => ({
            project_title: p?.project || "",
            description: p?.descriptions?.join(",") || "",
          })) || [];

      const request_body = {
        job_title,
        job_description,
        profile_summary,
        skills,
        experience,
        projects,
      };

      console.log({ request_body });
      const { data: refinedResume } = await refineResumeService(request_body);
      const profile = refinedResume?.profile_summary || "";
      const skillsList = refinedResume?.skills?.split?.(",") || [];
      const workExpList = refinedResume?.experience || [];
      const projectsList = refinedResume?.projects || [];

      const data = {
        profile,
        skillsList,
        workExpList,
        projectsList,
      };
      dispatch(updateResume(data));
      toast("Resume refined successfully!", { type: "success" });
    } catch (err) {
      console.log(err);
      // @ts-ignore
      toast(err?.message, { type: "error" });
    }
  },
);

const updateResume = createAsyncThunk(
  `${name}/updateResume`,
  async (data, { getState, dispatch }) => {
    const resume = getState()?.resume;
    const { projectsList, workExpList, skillsList } = data;
    dispatch(
      changeProfile({
        field: "name",
        value: data?.name || resume?.profile?.name || "",
      }),
    );
    dispatch(
      changeProfile({
        field: "summary",
        value: data?.profile || resume?.profile?.summary || "",
      }),
    );
    dispatch(
      changeProfile({
        field: "email",
        value: data?.contact_info?.email || resume?.profile?.email || "",
      }),
    );
    dispatch(
      changeProfile({
        field: "location",
        value: data?.contact_info?.location || resume?.profile?.location || "",
      }),
    );
    dispatch(
      changeProfile({
        field: "phone",
        value: data?.contact_info?.phone_number || resume?.profile?.phone || "",
      }),
    );
    dispatch(
      changeProfile({
        field: "url",
        value: data?.contact_info?.website || resume?.profile?.url || "",
      }),
    );
    dispatch(changeSkills({ field: "descriptions", value: skillsList }));

    workExpList.forEach((exp, idx) => {
      dispatch(
        changeWorkExperiences({
          idx,
          field: "jobTitle",
          value: exp?.title || "",
        }),
      );
      dispatch(
        changeWorkExperiences({
          idx,
          field: "company",
          value: exp?.company || "",
        }),
      );
      dispatch(
        changeWorkExperiences({
          idx,
          field: "date",
          value: exp?.duration || "",
        }),
      );
      dispatch(
        changeWorkExperiences({
          idx,
          field: "descriptions",
          value: [exp?.description || ""],
        }),
      );
      if (idx + 1 !== workExpList.length) {
        dispatch(addSectionInForm({ form: "workExperiences" }));
      }
    });

    projectsList.forEach((project, idx) => {
      dispatch(
        changeProjects({
          idx,
          field: "project",
          value: project?.project_title || "",
        }),
      );
      dispatch(
        changeProjects({
          idx,
          field: "descriptions",
          value: [project?.description || ""],
        }),
      );
      if (idx + 1 !== projectsList.length) {
        dispatch(addSectionInForm({ form: "projects" }));
      }
    });
  },
);

export const resumeSlice = createSlice({
  name,
  initialState: initialResumeState,
  reducers: {
    changeProfile: (
      draft,
      action: PayloadAction<{ field: keyof ResumeProfile; value: string }>,
    ) => {
      const { field, value } = action.payload;
      draft.profile[field] = value;
    },
    changeWorkExperiences: (
      draft,
      action: PayloadAction<
        CreateChangeActionWithDescriptions<ResumeWorkExperience>
      >,
    ) => {
      const { idx, field, value } = action.payload;
      const workExperience = draft.workExperiences[idx];
      workExperience[field] = value as any;
    },
    changeEducations: (
      draft,
      action: PayloadAction<
        CreateChangeActionWithDescriptions<ResumeEducation>
      >,
    ) => {
      const { idx, field, value } = action.payload;
      const education = draft.educations[idx];
      education[field] = value as any;
    },
    changeProjects: (
      draft,
      action: PayloadAction<CreateChangeActionWithDescriptions<ResumeProject>>,
    ) => {
      const { idx, field, value } = action.payload;
      const project = draft.projects[idx];
      project[field] = value as any;
    },
    changeSkills: (
      draft,
      action: PayloadAction<
        | { field: "descriptions"; value: string[] }
        | {
            field: "featuredSkills";
            idx: number;
            skill: string;
            rating: number;
          }
      >,
    ) => {
      const { field } = action.payload;
      if (field === "descriptions") {
        const { value } = action.payload;
        draft.skills.descriptions = value;
      } else {
        const { idx, skill, rating } = action.payload;
        const featuredSkill = draft.skills.featuredSkills[idx];
        featuredSkill.skill = skill;
        featuredSkill.rating = rating;
      }
    },
    changeCustom: (
      draft,
      action: PayloadAction<{ field: "descriptions"; value: string[] }>,
    ) => {
      const { value } = action.payload;
      draft.custom.descriptions = value;
    },
    addSectionInForm: (draft, action: PayloadAction<{ form: ShowForm }>) => {
      const { form } = action.payload;
      switch (form) {
        case "workExperiences": {
          draft.workExperiences.push(structuredClone(initialWorkExperience));
          return draft;
        }
        case "educations": {
          draft.educations.push(structuredClone(initialEducation));
          return draft;
        }
        case "projects": {
          draft.projects.push(structuredClone(initialProject));
          return draft;
        }
      }
    },
    moveSectionInForm: (
      draft,
      action: PayloadAction<{
        form: ShowForm;
        idx: number;
        direction: "up" | "down";
      }>,
    ) => {
      const { form, idx, direction } = action.payload;
      if (form !== "skills" && form !== "custom") {
        if (
          (idx === 0 && direction === "up") ||
          (idx === draft[form].length - 1 && direction === "down")
        ) {
          return draft;
        }

        const section = draft[form][idx];
        if (direction === "up") {
          draft[form][idx] = draft[form][idx - 1];
          draft[form][idx - 1] = section;
        } else {
          draft[form][idx] = draft[form][idx + 1];
          draft[form][idx + 1] = section;
        }
      }
    },
    deleteSectionInFormByIdx: (
      draft,
      action: PayloadAction<{ form: ShowForm; idx: number }>,
    ) => {
      const { form, idx } = action.payload;
      if (form !== "skills" && form !== "custom") {
        draft[form].splice(idx, 1);
      }
    },
    setResume: (draft, action: PayloadAction<Resume>) => {
      return action.payload;
    },
  },
});

export const {
  changeProfile,
  changeWorkExperiences,
  changeEducations,
  changeProjects,
  changeSkills,
  changeCustom,
  addSectionInForm,
  moveSectionInForm,
  deleteSectionInFormByIdx,
  setResume,
} = resumeSlice.actions;

export const selectResume = (state: RootState) => state.resume;
export const selectProfile = (state: RootState) => state.resume.profile;
export const selectWorkExperiences = (state: RootState) =>
  state.resume.workExperiences;
export const selectEducations = (state: RootState) => state.resume.educations;
export const selectProjects = (state: RootState) => state.resume.projects;
export const selectSkills = (state: RootState) => state.resume.skills;
export const selectCustom = (state: RootState) => state.resume.custom;

export default resumeSlice.reducer;
