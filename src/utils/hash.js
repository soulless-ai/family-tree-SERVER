import bcrypt from 'bcrypt';

export const hash = async (original) => {
	return await bcrypt.hash(original, 10);
};

export const hashCompare = async (i, j) => {
	return await bcrypt.compare(i, j);
}