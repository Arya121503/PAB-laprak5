import { Heading, Center, Text, Image, Box } from "native-base";
import { Header } from "../components";

const NewsDetail = ({ route }) => {
    // Mengambil parameter berita dari route
    const params = route.params.item;

    return (
        <>
            <Header title={"News"} withBack={true} />
            <Center flex={1} p={"5"} pt={10}> {/* Tambah padding atas di sini */}
                {/* Menampilkan gambar berita dengan margin atas */}
                <Image
                    source={{ uri: params.image }}
                    alt={params.title}
                    width="100%"
                    height={200}
                    borderRadius="md"
                    mt={400} // margin atas
                    mb={4} // margin bawah
                />
                {/* Menampilkan tanggal berita */}
                <Text fontSize={"md"} color="gray.500" textAlign={"center"}>
                    {params.date} {/* Pastikan date ada di object params */}
                </Text>
                {/* Menampilkan judul berita */}
                <Heading textAlign={"center"} mt={2} mb={2}>
                    {params.title}
                </Heading>
                {/* Menampilkan konten berita */}
                <Text textAlign={"left"}>
                    {params.content}
                </Text>
            </Center>
        </>
    );
};

export default NewsDetail;