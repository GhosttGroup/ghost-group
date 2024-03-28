import { axiosInstance } from '../common/utils/axios';

type FormDataType = {
  NDA?: boolean;
  companyName?: string;
  email: string;
  fullName: string;
  moreInfo?: string;
  phoneNumber?: string;
  service: string;
};
export const sendData = async (formData: FormData, cvFile: string) => {
  const response = await axiosInstance.post(
    `upload_and_send?full_name=${formData.fullName}&emailAddress=${formData.email}&services=${formData.service}${
      formData.phoneNumber ? '&phone_number=' + formData.phoneNumber : ''
    }${formData.companyName ? '&company_name=' + formData.companyName : ''}${
      formData.moreInfo ? '&message=' + formData.moreInfo : ''
    }`,
    cvFile
  );
  return response.data;
};
