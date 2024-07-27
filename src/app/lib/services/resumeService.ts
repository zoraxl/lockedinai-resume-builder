import axios from "axios";
import {
  REFINE_RESUME_SERVICE_BASE_URL,
  RESUME_SERVICE_BASE_URL,
} from "lib/constants";

export const generateFakeResumeService = (body: any) => {
  return axios.post(`${RESUME_SERVICE_BASE_URL}/fakeairesume/`, body);
};

export const refineResumeService = (body: any) => {
  return axios.post(`${REFINE_RESUME_SERVICE_BASE_URL}/optimizecv/`, body);
};
