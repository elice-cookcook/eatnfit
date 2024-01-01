import axios from 'axios';
import { useMutation } from 'react-query';

const postImage = async (image: FormData): Promise<string> => {
	const response = await axios.post(
		'/api/v1/images', image, {
            headers: { 'Content-Type': 'multipart/form-data' },
          }
	);
	return response.data.data;
};
export function usePostImage() {
    return useMutation((image: FormData) => postImage(image), {
        onError: () => {
            console.log("error");
        }
    });
}
