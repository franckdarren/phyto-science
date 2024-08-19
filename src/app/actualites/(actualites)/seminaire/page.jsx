import Image from "next/image";
import imageArticle from "../../../../../public/assets/cellule.jpg"

export default function PageSeminaire() {
    return (
        <div>
            <div class="max-w-screen-lg mx-auto">
                <main class="mt-10">
                    <div class="mb-4 md:mb-0 w-full mx-auto relative">
                        <div class="px-4 lg:px-0">
                            <h2 class="text-4xl font-semibold text-gray-800 leading-tight">
                                Pellentesque a consectetur velit, ac molestie ipsum. Donec sodales, massa et auctor.
                            </h2>
                            <a
                                href="#"
                                class="py-2 text-green-700 inline-flex items-center justify-center mb-2"
                            >
                                Séminaire
                            </a>
                        </div>
                        <Image
                            src={imageArticle}
                            alt="image"
                            className="object-cover w-full mx-auto">
                        </Image>
                    </div>

                    <div class="flex flex-col lg:flex-row lg:space-x-12">
                        <div class="px-4 lg:px-0 mt-12 text-gray-700 text-lg leading-relaxed w-full lg:w-3/4">
                            <p class="pb-6">Advantage old had otherwise sincerity dependent additions. It in adapted natural hastily is
                                justice. Six draw
                                you him full not mean evil. Prepare garrets it expense windows shewing do an. She projection advantages
                                resolution son indulgence. Part sure on no long life am at ever. In songs above he as drawn to. Gay was
                                outlived peculiar rendered led six.</p>

                            <p class="pb-6">Difficulty on insensible reasonable in. From as went he they. Preference themselves me as
                                thoroughly
                                partiality considered on in estimating. Middletons acceptance discovered projecting so is so or. In or
                                attachment inquietude remarkably comparison at an. Is surrounded prosperous stimulated am me discretion
                                expression. But truth being state can she china widow. Occasional preference fat remarkably now projecting
                                uncommonly dissimilar. Sentiments projection particular companions interested do at my delightful. Listening
                                newspaper in advantage frankness to concluded unwilling.</p>

                            <p class="pb-6">Adieus except say barton put feebly favour him. Entreaties unpleasant sufficient few pianoforte
                                discovered
                                uncommonly ask. Morning cousins amongst in mr weather do neither. Warmth object matter course active law
                                spring six. Pursuit showing tedious unknown winding see had man add. And park eyes too more him. Simple excuse
                                active had son wholly coming number add. Though all excuse ladies rather regard assure yet. If feelings so
                                prospect no as raptures quitting.</p>

                            <h2 class="text-2xl text-gray-800 font-semibold mb-4 mt-4">Uneasy barton seeing remark happen his has</h2>

                            <p class="pb-6">Guest it he tears aware as. Make my no cold of need. He been past in by my hard. Warmly thrown
                                oh he common
                                future. Otherwise concealed favourite frankness on be at dashwoods defective at. Sympathize interested
                                simplicity at do projecting increasing terminated. As edward settle limits at in.</p>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}