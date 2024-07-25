import axios from "axios";
import { RESUME_SERVICE_BASE_URL } from "lib/constants";

export const generateFakeResumeService = (body: any) => {
  return axios.post(`${RESUME_SERVICE_BASE_URL}/fakeairesume/`, body);
};
